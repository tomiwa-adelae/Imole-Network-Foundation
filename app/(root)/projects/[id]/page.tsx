import { DonateCTA } from "@/components/DonateCTA";
import { Header } from "@/components/shared/Header";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { Testimonials } from "@/components/shared/Testimonials";
import { OurVolunteers } from "@/components/OurVolunteers";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase image={"/assets/images/children-smiling.jpg"} />
			<ProjectDetails />
			<DonateCTA />
			<OurVolunteers />
		</div>
	);
};

export default page;
