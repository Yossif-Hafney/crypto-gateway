import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import userDb from "@/lib/userDb";
import { checkRateLimit } from "@/lib/rateLimit";
import io from "socket.io-client";

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();

    // Rate limiting check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const rateLimitKey = `signup:${ip}:${email}`;
    const rateLimitResult = checkRateLimit(rateLimitKey);

    if (!rateLimitResult.success) {
      const minutesRemaining = Math.ceil(
        (rateLimitResult.resetTime - Date.now()) / 60000
      );
      return NextResponse.json(
        {
          error: `Too many signup attempts. Please try again in ${minutesRemaining} minute${
            minutesRemaining !== 1 ? "s" : ""
          }.`,
        },
        { status: 429 }
      );
    }

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await userDb.query(
        "INSERT INTO users (email, password, name) VALUES ($1, $2, $3)",
        [email, hashedPassword, name || null]
      );
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        (err.message.includes("duplicate key") ||
          err.message.includes("unique constraint"))
      ) {
        return NextResponse.json(
          { error: "Email already registered." },
          { status: 400 }
        );
      }
      throw err;
    }

    // Emit merchant signup to Socket.IO server
    try {
      const socket = io(
        process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001"
      );

      socket.emit("submitMerchant", {
        id: Date.now().toString(),
        name: name || "Unknown",
        email: email,
        companyName: `${name}'s Business`,
        timestamp: new Date().toISOString(),
      });
    } catch (socketError) {
      console.error("Error emitting merchant signup:", socketError);
      // Continue with signup success even if socket emission fails
    }

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
