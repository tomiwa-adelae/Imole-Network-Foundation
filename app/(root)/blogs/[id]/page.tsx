import { BlogDetails } from "@/components/BlogDetails";
import { DonateCTA } from "@/components/DonateCTA";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Header } from "@/components/shared/Header";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { latestNews } from "@/constants";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: any }) => {
	const { id } = params;

	// Find the blog detail by ID
	const details = latestNews.find((news) => news.id === id);

	// Optional: Handle case where ID is not found
	if (!details) redirect("/not-found.tsx");
	return (
		<div className="relative">
			<Header />
			<ImageShowcase image={details.image[0]} />
			<BlogDetails details={details} />
			<DonateCTA />
			<OurVolunteers />
		</div>
	);
};

export default page;
