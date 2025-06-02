import { socialLinks } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

export const ProjectDetails = () => {
	return (
		<div className="py-10">
			<div className="container grid grid-cols-1 lg:grid-cols-6 gap-4">
				<div className="col-span-1 lg:col-span-4">
					<h2 className="font-semibold text-2xl lg:text-3xl">
						Feed a Family Campaign
					</h2>
					<div className="space-y-4 mt-3">
						<p className="text-base leading-relaxed">
							When to Use Lorem Ipsum generally, lorem ipsum is
							best suited to keeping template fo looking bare or
							minimizing the distractions of the draft copy.
							<br />
							Second, use lorem ipsum if you think placeholder
							text will distracting. in voluptate velit esse.
							Cursus libero viverra. One of the most remarkable
							applications of AI in healthcare is in diagnostics.
							Machine and learning algorithms are capable of
							analyzing vast amounts of medical data with speed to
							unprecedente speed and accuracy. This has led to
							earlier and more precise disease speed detection,
							greatly enhancing the chances of successful
							treatment.
						</p>
						<p className="text-base leading-relaxed">
							When to Use Lorem Ipsum generally, lorem ipsum is
							best suited to keeping template fo looking bare or
							minimizing the distractions of the draft copy.
							<br />
							Second, use lorem ipsum if you think placeholder
							text will distracting. in voluptate velit esse.
							Cursus libero viverra. One of the most remarkable
							applications of AI in healthcare is in diagnostics.
							Machine and learning algorithms are capable of
							analyzing vast amounts of medical data with speed to
							unprecedente speed and accuracy. This has led to
							earlier and more precise disease speed detection,
							greatly enhancing the chances of successful
							treatment.
						</p>
						<p className="text-base leading-relaxed">
							When to Use Lorem Ipsum generally, lorem ipsum is
							best suited to keeping template fo looking bare or
							minimizing the distractions of the draft copy.
							<br />
							Second, use lorem ipsum if you think placeholder
							text will distracting. in voluptate velit esse.
							Cursus libero viverra. One of the most remarkable
							applications of AI in healthcare is in diagnostics.
							Machine and learning algorithms are capable of
							analyzing vast amounts of medical data with speed to
							unprecedente speed and accuracy. This has led to
							earlier and more precise disease speed detection,
							greatly enhancing the chances of successful
							treatment.
						</p>
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
								<p className="text-white">
									Business, Marketing
								</p>
							</div>
							<div className="flex items-center justify-between gap-4 text-sm md:text-base text-gray-100">
								<p>Author:</p>
								<p className="text-white">Tomiwa Adelae</p>
							</div>
							<div className="flex items-center justify-between gap-4 text-sm md:text-base text-gray-100">
								<p>Date:</p>
								<p className="text-white">25 February, 2025</p>
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
		</div>
	);
};
