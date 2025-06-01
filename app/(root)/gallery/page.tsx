import { GalleryShowcase } from "@/components/GalleryShowcase";
import { Header } from "@/components/shared/Header";
import ImageLibrary from "@/components/shared/ImageLibrary";
import { galleryImages } from "@/constants";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Innovation 4.0 Gallery | Experience the Moments",
	description:
		"Relive the excitement of past Innovation conferences through our photo and video gallery.",
	keywords:
		" event photos, past events, conference highlights, networking moments, business growth, conference, startup, future trends, john ogunjide, tomiwa, tomiwa adelae, innovation 3.0, innovation 4.0, innovation conference, conferences, conference, cornerstone international foundation, foundation, bill gate foundations, alternative to gates foundations, gates foundations, ACU, Ajayi Crowther University",
};

const page = async () => {
	return (
		<div>
			<Header />
			<GalleryShowcase images={galleryImages.slice(0, 20)} />
			<div className="py-16 container">
				<ImageLibrary images={galleryImages} />
			</div>
		</div>
	);
};

export default page;
