import { latestNews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogBox } from "./BlogBox";

export const Blogs = () => {
	return (
		<div className="py-16">
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{latestNews.map(({ image, title, overview, id }, index) => (
					<BlogBox
						id={id}
						key={index}
						title={title}
						overview={overview}
						image={image[0]}
					/>
				))}
			</div>
		</div>
	);
};
