import { Document, Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
