import Image from "next/image";
import { ourLeadership, ourVolunteers, socialLinks } from "@/constants";
import { Button } from "./ui/button";

export const OurLeadership = ({
	title = <>Leadership That Serves</>,
}: {
	title?: React.ReactNode;
}) => {
	return (
		<div className="bg-[#ffffff] py-16">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
					{title}
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10">
					{ourLeadership.map(({ image, name, portfolio }, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-6 group"
						>
							<div className="relative">
								<Image
									src={image}
									alt={`${name}'s picture`}
									width={1000}
									height={1000}
									className="object-cover aspect-square rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all group-hover:scale-[105%]"
								/>
								<div
									className={`absolute rounded-xl opacity-0 group-hover:opacity-100 transition-all inset-0 bg-black/70 flex items-center justify-center gap-4`}
								>
									{socialLinks.map(
										({ icon, name, slug }, index) => {
											const Icon = icon;
											return (
												<Button
													size="icon"
													asChild
													variant="outline"
													key={index}
												>
													<a
														href={slug}
														target="_blank"
													>
														<Icon className="hover:text-secondary transition-all" />
													</a>
												</Button>
											);
										}
									)}
								</div>
							</div>
							<div className="text-center">
								<h3 className="font-medium text-xl lg:text-2xl">
									{name}
								</h3>
								<p className="text-sm lg:text-base mt-2">
									{portfolio}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
