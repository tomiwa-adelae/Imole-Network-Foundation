import { BlogDetails } from "@/components/BlogDetails";
import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/shared/Header";
import { ImageShowcase } from "@/components/shared/ImageShowcase";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Imole Hosts Health Outreach in Kwara State"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<BlogDetails />
		</div>
	);
};

export default page;
