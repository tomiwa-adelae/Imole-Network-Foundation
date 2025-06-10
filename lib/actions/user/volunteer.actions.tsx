"use server";

import Mailjet from "node-mailjet";
import { connectToDatabase } from "@/lib/database";
import Volunteer from "@/lib/database/models/volunteer.model";
import { handleError } from "@/lib/utils";
import {
	adminVolunteerMail,
	userVolunteerMail,
} from "@/email-templates/volunteer-templates";

const mailjet = Mailjet.apiConnect(
	process.env.MAILJET_API_PUBLIC_KEY!,
	process.env.MAILJET_API_PRIVATE_KEY!
);

export const volunteerForm = async ({
	name,
	email,
	phoneNumber,
	area,
	message,
}: VolunteerFormParams) => {
	try {
		await connectToDatabase();

		if (!name || !email)
			return {
				status: 400,
				message: "Oops! Your name, email is required.",
			};

		const volunteer = await Volunteer.create({
			name,
			email,
			phoneNumber,
			area,
			message,
		});

		if (!volunteer)
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
							Email: volunteer.email,
							Name: volunteer.name,
						},
					],
					Subject: `We Received Your Message – Imọlẹ Progressive Network Foundation`,
					TextPart: `We Received Your Message – Imọlẹ Progressive Network Foundation`,
					HTMLPart: userVolunteerMail({
						name: volunteer.name,
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
					Subject: ` New Volunteer Form Submission – Imọlẹ Progressive Network Foundation`,
					TextPart: ` New Volunteer Form Submission – Imọlẹ Progressive Network Foundation`,
					HTMLPart: adminVolunteerMail({
						name: volunteer.name,
						email: volunteer.email,
						area: volunteer.area,
						message: volunteer.message,
						phoneNumber: volunteer.phoneNumber,
					}),
				},
			],
		});

		return {
			status: 200,
			volunteer: JSON.parse(JSON.stringify(volunteer)),
			message: "Your message has been successfully sent. Thank you",
		};
	} catch (error) {
		handleError(error);
	}
};

export const getVolunteerDetails = async (id: any) => {
	try {
		await connectToDatabase();

		const volunteer = await Volunteer.findById(id);

		if (!volunteer)
			return {
				status: 400,
				message: "Oops! Details not found. Try again later.",
			};

		return JSON.parse(JSON.stringify(volunteer));
	} catch (error: any) {
		return {
			status: error?.status || 400,
			message:
				error?.message || "Oops! Volunteer not found! Try again later.",
		};
	}
};
