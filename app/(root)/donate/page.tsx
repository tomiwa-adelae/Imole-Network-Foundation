import type { Metadata } from "next";
import { DonationDetails } from "@/components/DonationDetails";
import { DonateForm } from "@/components/forms/DonateForm";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Showcase } from "@/components/shared/Showcase";

export const metadata: Metadata = {
	title: "Donate | Support Imọlẹ Progressive Network Foundation’s Mission to Help Others",
	description:
		"Support our work with your donation. Whether through bank transfer or online giving, your gift helps provide education, health care, and meals to those in need.",
	keywords:
		"Donate Nigeria, give to Imọlẹ Foundation, NGO donations, help Nigerian children, support charity Nigeria",
};

const page = () => {
	return (
		<div>
			<Showcase>
				<h1 className="text-5xl lg:text-7xl font-bold">
					Make a{" "}
					<span className="italic text-secondary">donation</span>{" "}
				</h1>
				<p className="text-base my-6 leading-relaxed">
					Every donation, no matter how big or small makes a
					significant difference to our course. Thank you for doing
					your part.
				</p>
			</Showcase>
			<DonationDetails />
			<DonateForm />
			<OurVolunteers />
		</div>
	);
};

export default page;
