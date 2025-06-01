"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Button } from "./ui/button";
import Link from "next/link";

export function GalleryShowcase({ images }: any) {
	return (
		<ImagesSlider className="h-screen" images={images}>
			<motion.div
				initial={{
					opacity: 0,
					y: -80,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.6,
				}}
				className="z-50 flex flex-col justify-center items-center"
			>
				<h1 className="text-5xl mb-4 text-white lg:text-7xl font-bold text-center">
					Our gallery
				</h1>
				<Button asChild size={"lg"}>
					<Link href="/volunteer">
						<span>Join us</span>
					</Link>
				</Button>
			</motion.div>
		</ImagesSlider>
	);
}
