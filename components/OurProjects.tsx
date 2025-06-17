"use client";
import { ourProjects } from "@/constants";
import { Carousel } from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export const OurProjects = () => {
	return (
		<div className="bg-white text-black py-16">
			<div className="container">
				<h2 className="text-center text-black font-semibold text-3xl md:text-4xl lg:text-5xl">
					Our Impact in Action
				</h2>
				<div className="relative overflow-hidden w-full h-full mt-8">
					{/* <Carousel slides={ourProjects} /> */}
					<ScrollArea>
						<div className="flex w-max space-x-4 pr-10 pb-8">
							{ourProjects?.map((project, index) => {
								return (
									<Link
										href={`/projects/${project?.id}`}
										key={index}
										className="relative group overflow-hidden rounded-lg w-[300px] md:w-[400px]"
									>
										<Image
											src={
												project?.image[0] ||
												"/assets/images/logo.png"
											}
											alt={project.title || "Space image"}
											width={1000}
											height={1000}
											className="w-full h-[280px] md:h-[300px] object-cover rounded-xl"
										/>
										<div>
											<h4 className="text-xl group-hover:text-secondary transition-all font-medium mt-4 line-clamp-2">
												{project?.title}
											</h4>
											<p className="text-base text-muted-foreground mt-1 line-clamp-3 mb-4">
												{project?.overview}
											</p>
										</div>
										<Button asChild size="md">
											<Link
												href={`/projects/${project?.id}`}
											>
												Learn more
											</Link>
										</Button>
									</Link>
								);
							})}
						</div>
						<ScrollBar orientation="horizontal" />
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};
