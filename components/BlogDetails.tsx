import { socialLinks } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import Image from "next/image";

export const BlogDetails = ({ details }: { details: any }) => {
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
						{details?.description.map(
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
					{details?.videos?.map((video: string, index: string) => (
						<video key={index} controls preload="none">
							<source src={video} type="video/mp4" />
							<track
								src="/path/to/captions.vtt"
								kind="subtitles"
								srcLang="en"
								label="English"
							/>
							Your browser does not support the video tag.
						</video>
					))}
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
						{details?.image?.map((image: string, index: string) => (
							<Image
								key={index}
								src={image}
								alt={details.title}
								width={1000}
								height={1000}
								className="aspect-square size-full rounded-xl object-cover"
							/>
						))}
					</div>
					<div className="flex items-center justify-start gap-2 mt-8">
						<p className="text-sm text-muted-foreground font-medium">
							Share:
						</p>
						<div className="flex items-center text-primary justify-start gap-2">
							{socialLinks?.map(({ icon, name, slug }, index) => {
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
				<div className="col-span-2 relative">
					<div
						className="bg-scroll sticky top-10 bg-no-repeat overflow-hidden bg-cover bg-center min-h-40 rounded-md py-16 flex items-center justify-center "
						style={{
							backgroundImage: `url(/assets/images/gallery6.jpg)`,
						}}
					>
						<div className="grid container h-full text-white rounded-md">
							<div className="z-20 container">
								<div className="text-center flex flex-col items-center justify-center">
									<Image
										src={"/assets/images/logo.png"}
										alt="Imọlẹ Progressive Network Foundation logo"
										width={1000}
										height={1000}
										className="size-20 object-cover mx-auto"
									/>
									<h2 className="text-2xl font-semibold my-4">
										Helping people
									</h2>
									<Button
										variant="secondary"
										asChild
										size="lg"
									>
										<Link href="/donate">
											Donate now <Heart />
										</Link>
									</Button>
								</div>
							</div>
						</div>
						<div className={`absolute inset-0 bg-black/70`} />
					</div>
				</div>
			</div>
		</div>
	);
};
