"use client";
import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/constants";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

export const GalleryMarquee = () => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	return (
		<div
			className="bg-scroll bg-[#F3EDDA] bg-no-repeat bg-contain bg-top-right py-16 relative"
			style={{
				backgroundImage: `url(/assets/images/line-bg.png)`,
			}}
		>
			<div className="container">
				<h2 className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl">
					Our Gallery
				</h2>
			</div>

			<div className="marquee-section relative overflow-hidden mt-8">
				<div className="whitespace-nowrap overflow-hidden">
					<div className="marquee-content will-change-transform flex items-center justify-between gap-4 group overflow-hidden">
						{galleryImages.map(({ src }, index: any) => (
							<Image
								key={index}
								src={src}
								alt={"Gallery image"}
								width={1000}
								height={1000}
								className="cursor-pointer rounded-lg size-[350px] object-cover transition-all hover:scale-[102%]"
								onClick={() => handleOpen(index)}
							/>
						))}
					</div>
				</div>
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
