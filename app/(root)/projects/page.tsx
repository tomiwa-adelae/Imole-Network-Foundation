import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { DonateCTA } from "@/components/DonateCTA";
import { Header } from "@/components/shared/Header";
import { Testimonials } from "@/components/shared/Testimonials";
import { ImageShowcase } from "@/components/shared/ImageShowcase";

export const metadata: Metadata = {
	title: "Our Projects | Impact Programs by Imọlẹ Progressive Network Foundation",
	description:
		"Explore our active community programs in education, health, and food outreach. Discover how we are transforming lives, one project at a time.",
	keywords:
		"NGO projects Nigeria, Imọlẹ programs, charity work Nigeria, community development, nonprofit initiatives",
};

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Our projects"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<Projects />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
