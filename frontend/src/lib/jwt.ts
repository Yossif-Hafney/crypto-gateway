import jwt, { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";
import { randomBytes } from "crypto";

const SECRET = process.env.JWT_SECRET as string;

if (!SECRET) {
  throw new Error("❌ Missing JWT_SECRET in environment variables");
}

if (SECRET.length < 32) {
  throw new Error("❌ JWT_SECRET must be at least 32 characters long");
}

export interface JwtPayload extends DefaultJwtPayload {
  id: number;
  email: string;
  jti?: string; // JWT ID for token revocation
  iat?: number; // Issued at
  exp?: number; // Expiry
}

export function signJwt(
  payload: Omit<JwtPayload, "jti" | "iat" | "exp">
): string {
  // Add a unique token ID for potential revocation
  const jti = randomBytes(16).toString("hex");

  return jwt.sign({ ...payload, jti }, SECRET, {
    algorithm: "HS256",
    expiresIn: "7d",
    issuer: "crypto-gateway",
    audience: "crypto-gateway-users",
  });
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    // First try with strict validation (issuer + audience)
    const decoded = jwt.verify(token, SECRET, {
      algorithms: ["HS256"],
      issuer: "crypto-gateway",
      audience: "crypto-gateway-users",
    }) as JwtPayload;

    // Check if token is expired (extra safety)
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      console.error("JWT expired");
      return null;
    }

    return decoded;
  } catch (error) {
    // If strict validation fails, try without issuer/audience (for backward compatibility)
    if (
      error instanceof jwt.JsonWebTokenError &&
      error.message.includes("audience")
    ) {
      try {
        console.warn("JWT audience/issuer mismatch - trying legacy validation");
        const decoded = jwt.verify(token, SECRET, {
          algorithms: ["HS256"],
        }) as JwtPayload;

        if (decoded.exp && decoded.exp * 1000 < Date.now()) {
          console.error("JWT expired");
          return null;
        }

        return decoded;
      } catch (legacyError) {
        console.error("JWT legacy verification also failed:", legacyError);
        return null;
      }
    }

    if (error instanceof jwt.TokenExpiredError) {
      console.error("JWT expired:", error.message);
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error("JWT invalid:", error.message);
    } else {
      console.error("JWT verification failed:", error);
    }
    return null;
  }
}
