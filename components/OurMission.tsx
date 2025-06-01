import { BadgeCheck, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export const OurMission = () => {
	return (
		<div className="bg-white text-black">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="py-10 md:py-16 lg:py-24 container">
					<div className="md:container">
						<h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-5xl">
							Our mission
						</h2>
						<p className="text-base mt-2 leading-relaxed">
							At Imole Network Foundation, our mission is to
							uplift lives and restore hope by meeting real needs
							in real communities. We are committed to creating a
							society where every child, every family, and every
							underserved individual has the opportunity to thrive
							— through education, health, nourishment, and
							empowerment.
						</p>
						<div className="grid gap-4 mt-4 text-base">
							<p>
								<BadgeCheck className="bg-secondary rounded-full text-white text-base inline-block mr-2" />
								<span>Lighting up underserved communities</span>
							</p>
							<p>
								<BadgeCheck className="bg-secondary rounded-full text-white text-base inline-block mr-2" />
								<span>
									Providing access to education for children
								</span>
							</p>
							<p>
								<BadgeCheck className="bg-secondary rounded-full text-white text-base inline-block mr-2" />
								<span>
									Delivering essential healthcare services
								</span>
							</p>
							<p>
								<BadgeCheck className="bg-secondary rounded-full text-white text-base inline-block mr-2" />
								<span>Fighting hunger and malnutrition</span>
							</p>
						</div>
					</div>
				</div>
				<Image
					src={"/assets/images/serving-img.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover"
				/>
			</div>
		</div>
	);
};
