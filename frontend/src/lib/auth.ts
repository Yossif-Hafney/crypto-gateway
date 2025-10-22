
import { cookies } from "next/headers";
import { verifyJwt, JwtPayload } from "./jwt";

export async function getCurrentUser(): Promise<JwtPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.log("⚠️ No token found in cookies");
      return null;
    }

    console.log("🔍 Token found, verifying...", { tokenLength: token.length });

    // Verify and validate token
    const payload = verifyJwt(token);

    if (!payload) {
      console.error("❌ Token verification failed");
      return null;
    }

    console.log("✅ Token verified successfully", {
      userId: payload.id,
      email: payload.email,
    });

    // Additional validation checks
    if (!payload.id || !payload.email) {
      console.error("Invalid token payload: missing required fields");
      return null;
    }

    // Check token age (extra safety - JWT already has exp)
    if (payload.iat) {
      const tokenAge = Date.now() - payload.iat * 1000;
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days

      if (tokenAge > maxAge) {
        console.error("Token too old");
        return null;
      }
    }

    return payload;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}

export async function requireAuth(): Promise<JwtPayload> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized: Please log in");
  }

  return user;
}
