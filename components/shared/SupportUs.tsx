import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { supportUs } from "@/constants";
import { Button } from "@/components/ui/button";

import { Irish_Grover } from "next/font/google";

const irish = Irish_Grover({
	subsets: ["latin"],
	weight: ["400"],
});

export const SupportUs = () => {
	return (
		<div
			className="bg-blend-overlay bg-scroll bg-no-repeat bg-cover bg-center py-16 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/support-img.jpg)`,
			}}
		>
			<div className="grid container h-full text-white">
				<div className="flex items-center justify-center">
					<div className="z-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4">
						<div>
							<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
								Support Imole{" "}
								<span className="text-secondary">
									Foundations
								</span>
							</h2>
							<p className="text-base mt-4 mb-6">
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
												width={1000}
												height={1000}
												className="size-[200px] object-cover"
											/>
											<h3
												className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] italic text-4xl ${irish.className}`}
											>
												{number}
												{suffix}
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
			<div className="absolute inset-0 bg-black/40" />
		</div>
	);
};
