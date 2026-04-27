"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.MY_RESEND_API);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 80;
const MAX_SUBJECT_LENGTH = 120;
const MAX_PHONE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;

function toCleanString(value) {
    return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function normalizePhone(value) {
    return value.replace(/[^\d+\-() ]/g, "").trim();
}

export async function sendContactEmail(formData) {
    if (!process.env.MY_RESEND_API) {
        console.error("MY_RESEND_API is missing");
        return { success: false, message: "Email service is not configured." };
    }

  	const name = toCleanString(formData.get("name"));
  	const email = toCleanString(formData.get("email")).toLowerCase();
  	const subject = toCleanString(formData.get("subject"));
  	const rawNumber = toCleanString(formData.get("number"));
  	const message = toCleanString(formData.get("message"));
  	const number = normalizePhone(rawNumber);

    if (!name || name.length > MAX_NAME_LENGTH) {
        return { success: false, message: "Enter a valid name." };
    }
  	if (!EMAIL_REGEX.test(email)) {
    	return { success: false, message: "Enter a valid email address." };
  	}
  	if (!subject || subject.length > MAX_SUBJECT_LENGTH) {
    	return { success: false, message: "Enter a valid subject." };
  	}
  	if (number.length > MAX_PHONE_LENGTH) {
    	return { success: false, message: "Phone number is too long." };
  	}
    if (!message || message.length > MAX_MESSAGE_LENGTH) {
        return { success: false, message: "Enter a valid message." };
    }

  	const safeName = escapeHtml(name);
  	const safeEmail = escapeHtml(email);
  	const safeSubject = escapeHtml(subject);
  	const safeNumber = escapeHtml(number || "Not provided");
  	const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    try {
        await resend.emails.send({
      		from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      		to: "harman.codes.dev@gmail.com",
      		subject: `[Portfolio] ${safeSubject}`,
      		reply_to: email,
      		html: `
        		<strong>Name</strong>: ${safeName} <br />
        		<strong>Subject</strong>: ${safeSubject} <br />
        		<strong>Number</strong>: ${safeNumber} <br />
        		<strong>Email</strong>: ${safeEmail} <br />
        		<p>${safeMessage}</p>
      		`,
      		text: `Name: ${name}\nSubject: ${subject}\nNumber: ${number || "Not provided"}\nEmail: ${email}\n\n${message}`,
    	});

        return { success: true, message: "Message sent!" };
    } catch (error) {
        console.error("Resend error:", error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
