import { OurGoals } from "@/components/OurGoals";
import { OurVision } from "@/components/OurVision";
import { Header } from "@/components/shared/Header";
import { OurMission } from "@/components/OurMission";
import { AboutDetails } from "@/components/AboutDetails";
import { SupportUs } from "@/components/shared/SupportUs";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { HereToHelp } from "@/components/HereToHelp";
import { DonateCTA } from "@/components/DonateCTA";
import { Testimonials } from "@/components/shared/Testimonials";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="About us"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<AboutDetails />
			<OurGoals />
			<OurMission />
			<OurVision />
			<HereToHelp />
			<OurVolunteers />
			<DonateCTA />
			<Testimonials />
			{/* <SupportUs /> */}
		</div>
	);
};

export default page;
