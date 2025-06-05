"use client";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Heart } from "lucide-react";
import { supportUs } from "@/constants";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

export const SupportUs = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});
	const [startCount, setStartCount] = useState(false);

	useEffect(() => {
		if (inView) {
			setStartCount(true);
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className="bg-blend-overlay bg-scroll bg-no-repeat bg-cover bg-center py-24 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/support-img.jpg)`,
			}}
		>
			<div className="grid container h-full text-white">
				<div className="flex items-center justify-center">
					<div className="z-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4">
						<div>
							<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
								Support Imole Foundations
							</h2>
							<p className="text-base mt-1 mb-6 leading-relaxed">
								Your generosity fuels our mission. With your
								support, we can provide access to education,
								healthcare, and empowerment to undeserved
								communities across Nigeria. Stand with us today.
							</p>
							<Button variant="secondary" asChild size="lg">
								<Link href="/donate">
									Donate now <Heart />
								</Link>
							</Button>
						</div>
						<div className="flex flex-col md:flex-row justify-between items-center gap-10">
							{supportUs.map(
								({ image, suffix, title, number }, index) => (
									<div
										className="flex flex-col justify-between items-center gap-8"
										key={index}
									>
										<div className="relative">
											<Image
												src={image}
												alt={"Green background circle"}
												width={200}
												height={200}
												className="object-cover"
											/>
											<h3
												className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-4xl lg:text-5xl font-bold`}
											>
												{startCount && (
													<CountUp
														start={-30}
														end={Number(number)}
														duration={2.25}
														decimal=","
														suffix={suffix}
													/>
												)}
											</h3>
										</div>
										<h3 className="text-base text-center lg:text-xl font-normal">
											{title}
										</h3>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-0 bg-black/65" />
		</div>
	);
};
