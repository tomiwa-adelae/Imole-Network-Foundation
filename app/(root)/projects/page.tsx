import { Projects } from "@/components/Projects";
import { DonateCTA } from "@/components/DonateCTA";
import { Header } from "@/components/shared/Header";
import { Testimonials } from "@/components/shared/Testimonials";
import { ImageShowcase } from "@/components/shared/ImageShowcase";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Our projects"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<Projects />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
