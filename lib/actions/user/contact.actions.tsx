"use server";

import Mailjet from "node-mailjet";
import {
	adminContactMail,
	userContactMail,
} from "@/email-templates/contact-templates";
import { connectToDatabase } from "@/lib/database";
import Contact from "@/lib/database/models/contact.model";
import { handleError } from "@/lib/utils";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const contactForm = async ({
	name,
	email,
	phoneNumber,
	subject,
	message,
}: ContactFormParams) => {
	try {
		await connectToDatabase();

		if (!name || !email || !subject)
			return {
				status: 400,
				message: "Oops! Your name, email & subject is required.",
			};

		const contact = await Contact.create({
			name,
			email,
			phoneNumber,
			subject,
			message,
		});

		if (!contact)
			return {
				status: 400,
				message: "Oops! An error occurred. Try again later.",
			};

		// **Send Confirmation Email to Student**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: contact.email,
							Name: contact.name,
						},
					],
					Subject: `We Received Your Message – Imọlẹ Progressive Network Foundation`,
					TextPart: `We Received Your Message – Imọlẹ Progressive Network Foundation`,
					HTMLPart: userContactMail({
						name: contact.name,
						email: contact.email,
						subject: contact.subject,
						message: contact.message,
						phoneNumber: contact.phoneNumber,
					}),
				},
			],
		});

		// **Send Email to Admin**
		await mailjet.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: {
						Email: process.env.SENDER_EMAIL_ADDRESS!,
						Name: process.env.COMPANY_NAME!,
					},
					To: [
						{
							Email: process.env.ADMIN_EMAIL_ADDRESS!, // Admin Email
							Name: process.env.COMPANY_NAME!,
						},
					],
					Subject: ` New Contact Form Submission – Imọlẹ Progressive Network Foundation`,
					TextPart: ` New Contact Form Submission – Imọlẹ Progressive Network Foundation`,
					HTMLPart: adminContactMail({
						name: contact.name,
						email: contact.email,
						subject: contact.subject,
						message: contact.message,
						phoneNumber: contact.phoneNumber,
					}),
				},
			],
		});

		return {
			status: 200,
			contact: JSON.parse(JSON.stringify(contact)),
			message: "Your message has been successfully sent. Thank you",
		};
	} catch (error) {
		handleError(error);
	}
};

export const getContactDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const contact = await Contact.findById(id);

		if (!contact)
			return {
				status: 400,
				message: "Oops! Details not found. Try again later.",
			};

		return JSON.parse(JSON.stringify(contact));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Contact not found! Try again later.",
		};
	}
};
