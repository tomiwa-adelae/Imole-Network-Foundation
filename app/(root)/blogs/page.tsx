import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/shared/Header";
import { DonateCTA } from "@/components/DonateCTA";
import { Testimonials } from "@/components/shared/Testimonials";
import { ImageShowcase } from "@/components/shared/ImageShowcase";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Our blogs"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<Blogs />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
