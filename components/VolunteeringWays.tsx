import { volunteeringWays } from "@/constants";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";

export const VolunteeringWays = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-5xl">
					Ways you can volunteer
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-8">
					{volunteeringWays.map(
						(
							{
								image,
								name,
								description,
								borderColor,
								textColor,
								rotate,
								bgColor,
							},
							index
						) => (
							<div
								className={cn(
									"rounded-2xl p-8 hover:rotate-0 transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
									bgColor,
									rotate
								)}
								key={index}
							>
								<div className="flex items-center justify-start gap-4">
									<Image
										src={image}
										alt={`${name}'s picture`}
										width={70}
										height={70}
										className={cn("object-cover")}
									/>
									<h4 className="font-medium text-lg">
										{name}
									</h4>
								</div>
								<p
									className={cn(
										"text-base leading-relaxed mt-4",
										textColor
									)}
								>
									{description}
								</p>
								<div className="flex items-center justify-end mt-2">
									<Info className={cn("size-6", textColor)} />
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};
