import { Blogs } from "@/components/Blogs";
import { Header } from "@/components/shared/Header";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import React from "react";

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Our blogs"
				image={"/assets/images/children-smiling.jpg"}
			/>
			<Blogs />
		</div>
	);
};

export default page;
