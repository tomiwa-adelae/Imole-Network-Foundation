import { DonateCTA } from "@/components/DonateCTA";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div>
			<Header />
			<ImageShowcase
				title="404"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<div className="container py-16 flex flex-col items-center justify-center text-center">
				<h2 className="text-secondary font-bold text-7xl md:text-8xl lg:text-9xl">
					4<span className="text-primary">0</span>4
				</h2>
				<p className="mt-4 mb-6 text-lg">
					Oops! This page is not available now
				</p>
				<Button asChild size="lg">
					<Link href="/">Back to Home</Link>
				</Button>
			</div>
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
