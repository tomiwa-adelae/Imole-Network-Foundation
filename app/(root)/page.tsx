import { CTA } from "@/components/shared/CTA";
import { Showcase } from "@/components/shared/Showcase";
import { About } from "@/components/About";
import { GalleryMarquee } from "@/components/GalleryMarquee";
import { SupportUs } from "@/components/shared/SupportUs";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ServingOthers } from "@/components/ServingOthers";
import { LatestNews } from "@/components/shared/LatestNews";
import { HereToHelp } from "@/components/HereToHelp";
import { OurProjects } from "@/components/OurProjects";
import { Testimonials } from "@/components/shared/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { DonateCTA } from "@/components/DonateCTA";

const page = () => {
	return (
		<div>
			<Showcase>
				<h1 className="text-5xl lg:text-7xl font-bold">
					Offering <span className="italic text-secondary">hope</span>{" "}
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
			</Showcase>
			<About />
			<OurProjects />
			<CTA />
			<GalleryMarquee />
			<DonateCTA />
			<Testimonials />
			<HereToHelp />
			<OurVolunteers />
			<ServingOthers />
			<LatestNews />
			<SupportUs />
		</div>
	);
};

export default page;
