import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ourProjects } from "@/constants";
import Link from "next/link";

export const Projects = () => {
	return (
		<div className="py-16">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
					{ourProjects.map((project, index) => {
						// Pattern: 2, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 2, ... (repeats every 4 items after first)
						let spanValue;
						if (index === 0) {
							spanValue = 2; // First item is always 2
						} else {
							// After first item, alternate between pairs of 3s and 2s
							const adjustedIndex = index - 1; // Adjust for the first item
							const groupIndex = Math.floor(adjustedIndex / 2); // Which pair we're in
							spanValue = groupIndex % 2 === 0 ? 3 : 2; // Even groups = 3, odd groups = 2
						}
						const colSpan = `col-span-1 md:col-span-2 lg:col-span-${spanValue}`;

						return (
							<Link
								href={`/projects/${project.id}`}
								key={project.id}
								className={`${colSpan} relative rounded-lg group overflow-hidden`}
							>
								<Image
									src={project.image[0]}
									alt={project.title}
									width={1000}
									height={1000}
									className="aspect-video w-full h-full object-cover group-hover:scale-[102%] transition-all cursor-pointer"
								/>
								<div className="absolute inset-0 bg-black/20 transition-all cursor-pointer" />
								<div className="lg:opacity-0 opacity-100 group-hover:opacity-100 transition-all absolute bg-[#660066] bottom-3 lg:-bottom-100 group-hover:lg:bottom-5 left-2 lg:left-5 rounded-lg text-white px-6 py-4 lg:p-6 flex items-center justify-between gap-4 w-[95%] md:w-auto">
									<div>
										<Link
											href={`/projects/${project.id}`}
											className="font-semibold text-xl md:text-2xl hover:text-gray-100 transition-all line-clamp-1"
										>
											{project.title}
										</Link>
										<p className="text-gray-200 text-sm lg:text-base mt-1.5">
											{project.category}
										</p>
									</div>
									<Button
										className="size-10 text-black"
										size="icon"
										variant={"outline"}
									>
										<ArrowUpRight className="size-5" />
									</Button>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};
