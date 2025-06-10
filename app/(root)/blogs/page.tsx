import type { Metadata } from "next";
import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/shared/Header";
import { DonateCTA } from "@/components/DonateCTA";
import { Testimonials } from "@/components/shared/Testimonials";
import { ImageShowcase } from "@/components/shared/ImageShowcase";

export const metadata: Metadata = {
	title: "Blog | Imọlẹ Progressive Network Foundation",
	description:
		"Stay updated with our latest projects, impact stories, community events, and inspiring tales of hope and transformation across Nigeria.",
	keywords:
		"Imọlẹ Progressive Foundation blog, Nigerian NGO news, charity stories Nigeria, nonprofit updates, humanitarian blog",
};

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Our blogs"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<Blogs />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
