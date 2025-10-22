import db from "@/lib/contactDb";
import { NextResponse } from "next/server";
interface ContactRequest {
  companyName: string;
  email: string;
  message: string;
}

export async function GET() {
  try {
    const result = await db.query(`
      SELECT 
        id, 
        companyName as name, 
        email, 
        message, 
        isRead as "isRead", 
        createdAt as timestamp
      FROM contacts
      ORDER BY createdAt DESC
    `);

    return NextResponse.json({
      success: true,
      contacts: result.rows,
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { companyName, email, message }: ContactRequest = await req.json();

    if (!companyName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const result = await db.query(
      `INSERT INTO contacts (companyName, email, message)
       VALUES ($1, $2, $3)
       RETURNING id`,
      [companyName, email, message]
    );

    console.log("Contact form submitted:", { companyName, email, message });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: result.rows[0].id, // Return the database ID
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
