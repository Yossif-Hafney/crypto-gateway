import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { step } = body;

    const response = NextResponse.json({ success: true });

    response.cookies.set("checkout_step", step, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 5,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Failed to set checkout step" },
      { status: 500 }
    );
  }
}
