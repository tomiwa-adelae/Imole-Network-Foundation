import Link from "next/link";
import Image from "next/image";
import { latestNews } from "@/constants";
import { BlogBox } from "../BlogBox";

export const LatestNews = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
					Latest News &
					<span className="text-secondary">Articles</span>
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{latestNews.map(({ image, title, excerpt }, index) => (
						<BlogBox
							key={index}
							title={title}
							excerpt={excerpt}
							image={image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
