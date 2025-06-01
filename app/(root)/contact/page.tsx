import { OurGoals } from "@/components/OurGoals";
import { OurVision } from "@/components/OurVision";
import { Header } from "@/components/shared/Header";
import { OurMission } from "@/components/OurMission";
import { AboutDetails } from "@/components/AboutDetails";
import { SupportUs } from "@/components/shared/SupportUs";
import { OurVolunteers } from "@/components/OurVolunteers";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { HereToHelp } from "@/components/HereToHelp";
import { FindOnMap } from "@/components/FindOnMap";
import { ContactForm } from "@/components/forms/ContactForm";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase image={"/assets/images/children-smiling.jpg"} />
			<ContactForm />
			<FindOnMap />
		</div>
	);
};

export default page;
