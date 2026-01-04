import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Here you can integrate with email service like Resend, SendGrid, etc.
    // For now, we'll just log it
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, message: "Error processing request" }, { status: 500 })
  }
}
