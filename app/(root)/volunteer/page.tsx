import type { Metadata } from "next";
import { DonateCTA } from "@/components/DonateCTA";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Showcase } from "@/components/shared/Showcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { VolunteeringWays } from "@/components/VolunteeringWays";

export const metadata: Metadata = {
	title: "Become a Volunteer | Join the Imole Network Foundation Family",
	description:
		"Volunteer with Imole Network Foundation and be part of real impact in education, health, and food relief efforts across Nigerian communities.",
	keywords:
		"Volunteer Nigeria, join NGO, help community Nigeria, Imole volunteer program, nonprofit service Nigeria",
};

const page = () => {
	return (
		<div>
			<Showcase>
				<h1 className="text-5xl lg:text-7xl font-bold">
					We're better{" "}
					<span className="italic text-secondary">together</span>{" "}
				</h1>
				<p className="text-base my-6 leading-relaxed">
					Volunteers are the heart of our mission. Whether you're a
					student, professional, retiree, or simply someone who wants
					to make a difference, there’s a place for you at Imole
					Network Foundation.
				</p>
			</Showcase>
			<VolunteeringWays />
			<VolunteerForm />
			<OurVolunteers title={<>Meet other Volunteers</>} />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
