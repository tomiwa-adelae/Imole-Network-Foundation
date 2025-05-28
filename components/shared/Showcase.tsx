import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/shared/Header";

export const Showcase = () => {
	return (
		<div className="bg-[#063127] min-h-[80vh] text-white">
			<Header />
			<div className="container py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="order-2 md:order-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
					<h1 className="text-5xl lg:text-7xl font-bold">
						Offering{" "}
						<span className="italic text-secondary">hope</span>{" "}
						<br className="hidden md:block" /> to people in{" "}
						<br className="hidden md:block" />
						hardship.
					</h1>
					<p className="text-base my-6 leading-relaxed">
						Imole Network Foundation is dedicated to uplifting
						undeserved Nigerian communities through education,
						healthcare, and social development initiatives.
					</p>
					<Button variant="secondary" asChild size="lg">
						<Link href="/">
							Learn more about us <ChevronRight />
						</Link>
					</Button>
				</div>
				<Image
					src={"/assets/images/showcase-image-2.png"}
					alt={
						"A picture of an Africa child smiling with a dread headstyle"
					}
					width={1000}
					height={1000}
					className="size-full object-cover order-1 md:order-1"
				/>
			</div>
		</div>
	);
};
