import db from "@/lib/contactDb";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { isRead } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const result = await db.query(
      `UPDATE contacts 
       SET isRead = $1 
       WHERE id = $2
       RETURNING id, isRead`,
      [isRead, id]
    );

    return NextResponse.json({
      success: true,
      message: "Contact status updated",
      contact: result.rows[0],
    });
  } catch (error) {
    console.error("Update contact error:", error);
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}
