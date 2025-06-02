import { DonationDetails } from "@/components/DonationDetails";
import { DonateForm } from "@/components/forms/DonateForm";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Showcase } from "@/components/shared/Showcase";
import React from "react";

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
