"use client";
import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/constants";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Link from "next/link";
import { Button } from "./ui/button";

export const GalleryMarquee = () => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div
			className="bg-scroll bg-[#660066] bg-no-repeat bg-contain bg-top-right py-16 relative"
			style={{
				backgroundImage: `url(/assets/images/line-bg.png)`,
			}}
		>
			<div className="container">
				<h2 className="font-semibold text-white text-center text-3xl md:text-4xl lg:text-5xl">
					Our Gallery
				</h2>
			</div>
			<div className="marquee-section relative overflow-hidden mt-8 space-y-8">
				{/* Top Marquee - Left Direction */}
				<div className="marquee-track flex w-max animate-marquee-left">
					{[...galleryImages, ...galleryImages].map(
						({ src }, index) => (
							<Image
								key={`top-${index}`}
								src={src}
								alt="Gallery image"
								width={1000}
								height={1000}
								className="cursor-pointer rounded-lg size-[220px] md:size-[280px] lg:size-[350px] object-cover transition-all hover:scale-[102%] mx-2"
								onClick={() =>
									handleOpen(index % galleryImages.length)
								}
							/>
						)
					)}
				</div>

				<div className="... opacity-90 drop-shadow-md" />

				{/* Bottom Marquee - Right Direction */}
				<div className="marquee-track flex w-max animate-marquee-right">
					{[...galleryImages, ...galleryImages].map(
						({ src }, index) => (
							<Image
								key={`bottom-${index}`}
								src={src}
								alt="Gallery image"
								width={1000}
								height={1000}
								className="cursor-pointer rounded-lg size-[220px] md:size-[280px] lg:size-[350px] object-cover transition-all hover:scale-[102%] mx-2"
								onClick={() =>
									handleOpen(index % galleryImages.length)
								}
							/>
						)
					)}
				</div>
			</div>

			<div className="flex mt-8 items-center justify-center">
				<Button variant={"white"} asChild size="lg">
					<Link href="/gallery">Check our gallery</Link>
				</Button>
			</div>

			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={galleryImages}
					index={currentIndex}
				/>
			)}
		</div>
	);
};
