import Head from "next/head";
import type { Metadata } from "next";
import { OurGoals } from "@/components/OurGoals";
import { OurVision } from "@/components/OurVision";
import { Header } from "@/components/shared/Header";
import { OurMission } from "@/components/OurMission";
import { AboutDetails } from "@/components/AboutDetails";
import { SupportUs } from "@/components/shared/SupportUs";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { HereToHelp } from "@/components/HereToHelp";
import { DonateCTA } from "@/components/DonateCTA";
import { Testimonials } from "@/components/shared/Testimonials";

export const metadata: Metadata = {
	title: "About Us | Imọlẹ Progressive Network Foundation – Who We Are & What We Do",
	description:
		"Learn about Imọlẹ Progressive Network Foundation’s mission, vision, goals, and the heart behind our service to Nigerian communities. Together, we are the light in people's darkest moments.",
	keywords:
		"About Imọlẹ Progressive Foundation, Nigerian charity, nonprofit goals, mission and vision, humanitarian efforts, NGO Nigeria",
};

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="About us"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<AboutDetails />
			<OurGoals />
			<OurMission />
			<OurVision />
			<HereToHelp />
			<OurVolunteers />
			<DonateCTA />
			<Testimonials />
			{/* <SupportUs /> */}
		</div>
	);
};

export default page;
