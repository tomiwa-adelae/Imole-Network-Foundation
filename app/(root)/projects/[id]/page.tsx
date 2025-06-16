import { DonateCTA } from "@/components/DonateCTA";
import { Header } from "@/components/shared/Header";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ourProjects } from "@/constants";
import { redirect } from "next/navigation";

import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
	{ params }: any,
	parent: ResolvingMetadata
): Promise<Metadata> {
	try {
		const { id } = await params;

		// Find the blog detail by ID
		const details = ourProjects.find((news) => news.id === id);

		// Optional: Handle case where ID is not found
		if (!details) redirect("/not-found.tsx");

		return {
			title: `${details?.title} - Imọlẹ Progressive Network Foundation`,
			description: details?.description[0],
		};
	} catch (error) {
		return {
			title: "Imọlẹ Progressive Network Foundation",
			description:
				"Imọlẹ Progressive Network Foundation is a Nigerian non-profit dedicated to empowering communities through education, health support, and food relief. Join us in serving people and changing lives.",
		};
	}
}

const page = async ({ params }: { params: any }) => {
	const { id } = await params;

	// Find the blog detail by ID
	const details = ourProjects.find((news) => news.id === id);

	// Optional: Handle case where ID is not found
	if (!details) redirect("/not-found.tsx");

	return (
		<div className="relative">
			<Header />
			<ImageShowcase image={details.image[0]} />
			<ProjectDetails details={details} />
			<DonateCTA />
			<OurVolunteers />
		</div>
	);
};

export default page;
