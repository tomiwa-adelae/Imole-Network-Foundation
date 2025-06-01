import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogBox = ({
	title,
	excerpt,
	image,
}: {
	title: string;
	excerpt: string;
	image: string;
}) => {
	return (
		<div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
			<Image
				src={image}
				alt={`${title}'s picture`}
				width={1000}
				height={1000}
				className="object-cover aspect-video rounded-lg"
			/>
			<div className="p-4">
				<Link
					href="/blogs/12345"
					className="hover:text-secondary transition-all font-semibold text-xl"
				>
					{title}
				</Link>
				<p className="mt-2 text-base text-muted-foreground line-clamp-3">
					{excerpt}
				</p>
				<Link
					className="py-4 text-secondary font-semibold block"
					href="/blogs/12345"
				>
					Read more
				</Link>
			</div>
		</div>
	);
};
