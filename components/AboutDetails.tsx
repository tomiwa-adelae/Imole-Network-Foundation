import Image from "next/image";
import React from "react";

export const AboutDetails = () => {
	return (
		<div className="bg-[#F3EDDA] text-black">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src={"/assets/images/gallery6.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-16 lg:py-24 container order-1 md:order-2">
					<div className="md:container">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
							What we do
						</h2>
						<div className="space-y-2 text-base mt-2 leading-relaxed">
							<p>
								At Imọlẹ Progressive Network Foundation, we are
								a Nigerian nonprofit dedicated to restoring
								dignity and hope to those who need it most.
								“Imọlẹ,” meaning light in Yoruba, represents our
								belief that even the smallest act of kindness
								can light up a life.
							</p>
							<p>
								We serve marginalized communities across Nigeria
								through impactful programs in education,
								healthcare, and food security, ensuring no one
								is left behind. From slum settlements to remote
								villages, our mission is carried out by
								passionate volunteers, grassroots organizers,
								and partners who believe in humanity and
								compassion.
							</p>
							<p>
								Founded on the principles of empathy, service,
								and equity, we are not just a charity, we are a
								movement of people driven by purpose. We aim to
								break cycles of poverty, heal wounds of neglect,
								and build a brighter future for children,
								families, and communities across Nigeria.
							</p>
							<p>
								Whether we’re equipping a child with school
								supplies, delivering food to the hungry, or
								organizing a free medical outreach, we are
								present, intentional, and committed to being a
								light in dark places.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
