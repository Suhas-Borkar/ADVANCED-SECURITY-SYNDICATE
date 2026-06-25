import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { sendInquiryNotification } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  const { name, contactNo, email, city, userType, subject, message, brandsOfInterest, ticketId } = await req.json();

  if (!name || !contactNo || !email || !city || !userType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // DB and mail run independently — one failing won't block the other
  const [dbResult, mailResult] = await Promise.allSettled([
    pool.execute(
      `INSERT INTO inquiries (ticket_id, name, contact_no, email, city, user_type, subject, message, brands_of_interest)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        ticketId,
        name,
        contactNo,
        email,
        city,
        userType,
        subject || null,
        message || null,
        brandsOfInterest?.length ? brandsOfInterest.join(", ") : null,
      ]
    ),
    sendInquiryNotification({
      ticketId, name, email, contactNo, city, userType, subject, message, brandsOfInterest,
    }),
  ]);

  if (dbResult.status === "rejected") console.error("DB error:", dbResult.reason);
  if (mailResult.status === "rejected") console.error("Mail error:", mailResult.reason);

  return NextResponse.json({ success: true, ticketId }, { status: 200 });
}
