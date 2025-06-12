import { BlogBox } from "../BlogBox";
import { latestNews } from "@/constants";
import { Button } from "../ui/button";
import Link from "next/link";

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
						.map(({ image, title, overview, id }, index) => (
							<BlogBox
								id={id}
								key={index}
								title={title}
								overview={overview}
								image={image[0]}
							/>
						))}
				</div>
				<div className="flex items-center justify-center mt-8">
					<Button asChild size="lg">
						<Link href="/blogs">Read more</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
