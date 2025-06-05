import { BlogBox } from "../BlogBox";
import { latestNews } from "@/constants";

export const LatestNews = () => {
	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center">
					Latest News & Articles
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{latestNews
						.slice(0, 3)
						.map(({ image, title, excerpt, id }, index) => (
							<BlogBox
								id={id}
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
