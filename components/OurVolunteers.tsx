import Image from "next/image";
import { ourVolunteers, socialLinks } from "@/constants";
import { Button } from "./ui/button";

export const OurVolunteers = ({
	title = (
		<>
			Meet our <span className="text-secondary">Volunteers</span>
		</>
	),
}: {
	title?: React.ReactNode;
}) => {
	return (
		<div className="bg-[#ffffff] py-16">
			<div className="container">
				<h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
					{title}
				</h2>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-10">
					{ourVolunteers.map(({ image, name, portfolio }, index) => (
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
									className="object-cover size-[250px] aspect-auto rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-all group-hover:scale-[105%]"
								/>
								<div
									className={`absolute rounded-full opacity-0 group-hover:opacity-100 transition-all inset-0 bg-black/70 flex items-center justify-center gap-4`}
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
