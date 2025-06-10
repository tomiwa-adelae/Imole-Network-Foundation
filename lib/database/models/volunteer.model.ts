import { Document, Schema, model, models } from "mongoose";

const VolunteerSchema = new Schema(
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
		area: {
			type: String,
		},
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Volunteer = models.Volunteer || model("Volunteer", VolunteerSchema);

export default Volunteer;
