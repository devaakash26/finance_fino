"use server";

import { Resend } from "resend";

export async function sendEmail({ to, subject, react }) {
    const resend = new Resend(process.env.RESEND_API_KEY || "");

    try {
        const data = await resend.emails.send({
            from: "FINO APP <onboarding@resend.dev>",
            to:"pgrm.aakash@gmail.com",
            subject,
            react,
        });
        console.log(data);
        console.log("Resend API Key:", process.env.RESEND_API_KEY ? "Loaded" : "Missing");

        return { success: true, data };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error };
    }
}