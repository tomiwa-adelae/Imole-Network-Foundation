import Link from "next/link";
import Image from "next/image";
import { latestNews } from "@/constants";

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
						<div
							key={index}
							className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg"
						>
							<Image
								src={image}
								alt={`${title}'s picture`}
								width={1000}
								height={1000}
								className="object-cover aspect-video rounded-lg"
							/>
							<div className="p-4">
								<Link
									href="/"
									className="hover:text-secondary transition-all font-semibold text-xl"
								>
									{title}
								</Link>
								<p className="mt-2 text-base text-muted-foreground line-clamp-3">
									{excerpt}
								</p>
								<Link
									className="py-4 text-secondary font-semibold block"
									href="/"
								>
									Read more
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
