import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
} as nodemailer.TransportOptions);

export async function sendInquiryNotification(data: {
  ticketId: string;
  name: string;
  email: string;
  contactNo: string;
  city: string;
  userType: string;
  subject?: string;
  message?: string;
  brandsOfInterest?: string[];
}) {
  const brandsList = data.brandsOfInterest?.length
    ? data.brandsOfInterest.join(", ")
    : "None selected";

  // Email to you (admin notification)
  await transporter.sendMail({
    from: `"ASS Inquiry Desk" <${process.env.SMTP_FROM}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `New Inquiry [${data.ticketId}] — ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;padding:24px;text-align:center;">
          <h2 style="color:#fff;margin:0;font-size:18px;">New Distributor Inquiry</h2>
          <p style="color:#94a3b8;font-size:12px;margin:6px 0 0;">Advanced Security Syndicate — Help Desk</p>
        </div>
        <div style="padding:28px;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#64748b;width:40%;">Ticket ID</td><td style="padding:8px 0;font-weight:bold;color:#1e293b;">${data.ticketId}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Name</td><td style="padding:8px 0;color:#1e293b;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Email</td><td style="padding:8px 0;color:#1e293b;">${data.email}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Phone</td><td style="padding:8px 0;color:#1e293b;">${data.contactNo}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">City</td><td style="padding:8px 0;color:#1e293b;">${data.city}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">User Type</td><td style="padding:8px 0;color:#1e293b;">${data.userType}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Brands</td><td style="padding:8px 0;color:#1e293b;">${brandsList}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;">Subject</td><td style="padding:8px 0;color:#1e293b;">${data.subject || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;vertical-align:top;">Message</td><td style="padding:8px 0;color:#1e293b;">${data.message || "—"}</td></tr>
          </table>
        </div>
        <div style="background:#f8fafc;padding:16px;text-align:center;font-size:11px;color:#94a3b8;">
          Advanced Security Syndicate &mdash; Automated Inquiry System
        </div>
      </div>
    `,
  });

  // Confirmation email to the customer
  await transporter.sendMail({
    from: `"Advanced Security Syndicate" <${process.env.SMTP_FROM}>`,
    to: data.email,
    subject: `Inquiry Received — ${data.ticketId}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
        <div style="background:#0f172a;padding:24px;text-align:center;">
          <h2 style="color:#fff;margin:0;font-size:18px;">Thank You, ${data.name}!</h2>
          <p style="color:#94a3b8;font-size:12px;margin:6px 0 0;">Your inquiry has been received</p>
        </div>
        <div style="padding:28px;">
          <p style="color:#475569;font-size:14px;line-height:1.6;">
            We have received your inquiry and our team will get back to you within <strong>24 working hours</strong>.
          </p>
          <div style="background:#f1f5f9;border-radius:8px;padding:16px;margin:20px 0;text-align:center;">
            <p style="color:#64748b;font-size:11px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Your Reference Ticket</p>
            <p style="color:#0f172a;font-size:22px;font-weight:900;margin:0;font-family:monospace;">${data.ticketId}</p>
          </div>
          <p style="color:#475569;font-size:13px;">For urgent inquiries, reach us directly:</p>
          <p style="color:#475569;font-size:13px;">
            📞 +91 88308 51805 | +91 96891 47700<br/>
            📧 advancescrtcp55@gmail.com
          </p>
        </div>
        <div style="background:#f8fafc;padding:16px;text-align:center;font-size:11px;color:#94a3b8;">
          Advanced Security Syndicate, New Sangavi, Pune – 411027
        </div>
      </div>
    `,
  });
}
