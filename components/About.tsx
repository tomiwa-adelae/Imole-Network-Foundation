import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const About = () => {
	return (
		<div className="bg-[#F3EDDA] relative">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src={"/assets/images/serving-img.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-16 lg:py-24 container order-1 md:order-2">
					<div className="md:container">
						<h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl">
							We are a part of the{" "}
							<br className="hidden lg:block" />{" "}
							<span className="md:block text-secondary italic -rotate-1">
								{" "}
								community we serve
							</span>
						</h2>
						<p className="text-base mt-2 md:mt-4 mb-6 leading-relaxed">
							Imole means light and that’s exactly what we bring.{" "}
							<br /> At Imole Network Foundation, we are a
							Nigerian nonprofit passionate about transforming
							lives through compassion, education, healthcare, and
							community empowerment. <br /> We believe that every
							life matters and that real change begins when we
							serve those most in need. From undeserved rural
							areas to urban communities, we stand in the gap,
							spreading hope, love, and light. Join us in building
							a better Nigeria, one life at a time.
						</p>
						<Button variant="secondary" asChild size="lg">
							<Link href="/about">Learn more</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
