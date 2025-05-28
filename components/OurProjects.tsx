"use client";
import { ourProjects } from "@/constants";
import { Carousel } from "@/components/ui/carousel";

export const OurProjects = () => {
	return (
		<div className="bg-white text-black py-16">
			<div className="container">
				<h2 className="text-center text-primary font-semibold text-3xl md:text-4xl lg:text-5xl">
					Our Impact <span className="text-secondary">in Action</span>
				</h2>
				<div className="relative overflow-hidden w-full h-full pb-24 mt-8">
					<Carousel slides={ourProjects} />
				</div>
			</div>
		</div>
	);
};
