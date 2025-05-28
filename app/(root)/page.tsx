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

const page = () => {
	return (
		<div>
			<Showcase />
			<About />
			<OurProjects />
			<CTA />
			<GalleryMarquee />
			<HereToHelp />
			<OurVolunteers />
			<ServingOthers />
			<LatestNews />
			<SupportUs />
		</div>
	);
};

export default page;
