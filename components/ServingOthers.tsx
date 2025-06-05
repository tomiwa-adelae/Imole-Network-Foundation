import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ServingOthers = () => {
	return (
		<div className="bg-[#F3EDDA] relative">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="py-10 lg:py-24 container">
					<div className="md:container">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
							In the business of{" "}
							<br className="hidden md:block" />
							<span className="md:block text-secondary italic -rotate-1">
								serving people
							</span>
						</h2>
						<p className="text-base my-6 leading-relaxed">
							At Imole Network Foundation, our purpose is rooted
							in compassion and community. We believe true impact
							comes from selfless service and genuine connection.
							From rural education to healthcare outreach, we go
							where the need is greatest. Every act of kindness is
							a step toward a stronger, more hopeful Nigeria.
							Serving people isn’t just what we do but it’s who we
							are.
						</p>
						<Button variant="secondary" asChild size="lg">
							<Link href="/volunteer">Become a Volunteer</Link>
						</Button>
					</div>
				</div>
				<Image
					src={"/assets/images/gallery6.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover"
				/>
			</div>
		</div>
	);
};
