"use client";
import { socialLinks } from "@/constants";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

export const ProjectDetails = ({ details }: { details: any }) => {
	const [open, setOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOpen = (index: number) => {
		setCurrentIndex(index);
		setOpen(true);
	};

	const imagesWithSrc = details?.image.map((path: any) => ({ src: path }));

	return (
		<div className="py-10">
			<div className="container grid grid-cols-1 lg:grid-cols-6 gap-4">
				<div className="col-span-1 lg:col-span-4">
					<h2 className="font-semibold text-2xl lg:text-3xl">
						{details?.title}
					</h2>
					<div className="space-y-4 mt-3">
						<p className="text-base leading-relaxed">
							{details?.overview}
						</p>
						{details?.description?.map(
							(description: any, index: string) => (
								<p
									className="text-base leading-relaxed"
									key={index}
								>
									{description}
								</p>
							)
						)}
						{details?.dedication?.map(
							(dedication: any, index: string) => (
								<p
									className="text-base leading-relaxed"
									key={index}
								>
									{dedication}
								</p>
							)
						)}
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
						{details?.videos?.map(
							(video: string, index: string) => (
								<video
									key={index}
									controls
									preload="none"
									poster={details?.image[0]} // 👈 Add this line
								>
									<source src={video} type="video/mp4" />
									<track
										src="/path/to/captions.vtt"
										kind="subtitles"
										srcLang="en"
										label="English"
									/>
									Your browser does not support the video tag.
								</video>
							)
						)}
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						{details?.image?.map((image: string, index: any) => (
							<div
								className="group relative"
								onClick={() => handleOpen(index)}
								key={index}
							>
								<Image
									src={image}
									alt={details.title}
									width={1000}
									height={1000}
									className="aspect-square cursor-pointer size-full rounded-xl object-cover"
								/>
								<div className="absolute opacity-0 group-hover:opacity-100 inset-0 transition-all group-hover:bg-black/20 cursor-pointer" />
							</div>
						))}
					</div>
					<div className="mt-6">
						<Button asChild size="lg">
							<Link href="/donate">
								Donate now <Heart />
							</Link>
						</Button>
					</div>
				</div>
				<div className="col-span-2 relative">
					<div className="bg-primary sticky top-10 rounded-lg p-8">
						<h3 className="font-semibold text-white text-lg lg:text-2xl">
							Project Information
						</h3>
						<div className="mt-4 space-y-4">
							<div className="flex items-center justify-between gap-4 text-sm md:text-base text-gray-100">
								<p>Category:</p>
								<p className="text-white">{details.category}</p>
							</div>
							<div className="flex items-center justify-between gap-4 text-sm md:text-base text-gray-100">
								<p>Author:</p>
								<p className="text-white">{details.author}</p>
							</div>
							<div className="flex items-center justify-between gap-4 text-sm md:text-base text-gray-100">
								<p>Date:</p>
								<p className="text-white">{details.date}</p>
							</div>
						</div>
						<div className="flex items-center text-primary justify-start gap-4 mt-6">
							{socialLinks.map(({ icon, name, slug }, index) => {
								const Icon = icon;
								return (
									<Button
										size="icon"
										asChild
										variant="outline"
										key={index}
									>
										<a href={slug} target="_blank">
											<Icon className="hover:text-secondary transition-all" />
										</a>
									</Button>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{open && (
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					slides={imagesWithSrc}
					index={currentIndex}
				/>
			)}
		</div>
	);
};
