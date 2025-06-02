import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

export const DonateCTA = () => {
	return (
		<div
			className="relative w-full aspect-video max-h-[70vh] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url(/assets/images/donate-cta.jpg)" }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 top-auto bg-white custom-shape z-10" />

			{/* Content */}
			<div className="relative z-20 lg:container h-full w-full flex items-center justify-center">
				<div className="text-center w-full text-white">
					<h2 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-semibold mb-6">
						Children Need Your Help By Donating Today
					</h2>
					<Button variant="secondary" asChild size="lg">
						<Link
							href="/donate"
							className="inline-flex items-center gap-2"
						>
							Donate now <Heart className="w-5 h-5" />
						</Link>
					</Button>
				</div>
			</div>
			<div className={`absolute inset-0 bg-black/40`} />
		</div>
	);
};
