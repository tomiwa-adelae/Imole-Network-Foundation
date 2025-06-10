import type { Metadata } from "next";
import { DonateCTA } from "@/components/DonateCTA";
import { GalleryShowcase } from "@/components/GalleryShowcase";
import { Header } from "@/components/shared/Header";
import ImageLibrary from "@/components/shared/ImageLibrary";
import { Testimonials } from "@/components/shared/Testimonials";
import { galleryImages } from "@/constants";

export const metadata: Metadata = {
	title: "Gallery | Impact Moments from Imọlẹ Progressive Network Foundation",
	description:
		"Browse powerful photos and videos showcasing the impact of Imọlẹ Progressive Network Foundation in communities across Nigeria—from food drives and school outreaches to health programs and volunteer efforts.",
	keywords:
		"Imọlẹ Foundation gallery, NGO photo gallery, charity events Nigeria, nonprofit impact photos, volunteer activities, humanitarian efforts Nigeria, Imọlẹ Network photos",
};

const page = async () => {
	return (
		<div>
			<Header />
			<GalleryShowcase images={galleryImages.slice(0, 20)} />
			<div className="py-16 container">
				<ImageLibrary images={galleryImages} />
			</div>
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
