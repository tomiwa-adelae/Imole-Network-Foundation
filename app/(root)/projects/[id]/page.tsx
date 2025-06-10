import { DonateCTA } from "@/components/DonateCTA";
import { Header } from "@/components/shared/Header";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ourProjects } from "@/constants";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: any }) => {
	const { id } = params;

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
