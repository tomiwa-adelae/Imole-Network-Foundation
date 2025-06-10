declare interface ContactFormParams {
	email: string;
	phoneNumber?: string;
	subject: string;
	message: string;
	name: string;
}

declare interface VolunteerFormParams {
	email: string;
	phoneNumber?: string;
	area?: string;
	message?: string;
	name: string;
}
