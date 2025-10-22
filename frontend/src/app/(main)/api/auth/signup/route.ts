import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import userDb from "@/lib/userDb";
import { checkRateLimit } from "@/lib/rateLimit";

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

    const stmt = userDb.prepare(
      "INSERT INTO users (email, password, name) VALUES (?, ?, ?)"
    );
    try {
      stmt.run(email, hashedPassword, name || null);
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        err.message.includes("UNIQUE constraint failed")
      ) {
        return NextResponse.json(
          { error: "Email already registered." },
          { status: 400 }
        );
      }
      throw err;
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
