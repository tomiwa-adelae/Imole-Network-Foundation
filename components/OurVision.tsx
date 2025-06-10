import { BadgeCheck, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

export const OurVision = () => {
	return (
		<div className="bg-white text-black">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src={"/assets/images/serving-img.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-16 lg:py-24 container order-1 md:order-2 flex items-center justify-center">
					<div className="md:container">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
							Our vision
						</h2>
						<p className="text-base mt-2 leading-relaxed">
							At Imọlẹ Progressive Network Foundation, our vision
							is to see a Nigeria and an Africa where no child is
							denied education, no family lacks healthcare, and no
							community is left behind. We envision a future where
							compassion drives action, and every undeserved
							person has the opportunity, dignity, and support
							they need to live a full and meaningful life.
							Through collaboration, service, and love, we aim to
							transform pain into progress and darkness into light
							one life, one village, one nation at a time.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
