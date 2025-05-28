import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTAs } from "@/constants";

export const CTA = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			{CTAs.map(
				(
					{
						image,
						title,
						description,
						slug,
						label,
						icon,
						buttonIcon,
						overlay,
						hover,
					},
					index
				) => {
					const Icon = icon;
					const ButtonIcon = buttonIcon;
					return (
						<div
							key={index}
							className="bg-scroll bg-no-repeat bg-cover bg-center py-24 flex items-center justify-center relative"
							style={{
								backgroundImage: `url(${image})`,
							}}
						>
							<div className="grid container h-full text-white">
								<div className="z-20 container">
									<div className="flex items-start justify-start gap-4">
										<Icon className="size-16" />
										<h2 className="font-semibold text-3xl lg:text-4xl">
											{title}
										</h2>
									</div>
									<p className="text-lg mt-6 mb-8 leading-relaxed">
										{description}
									</p>
									<Button
										className={`${hover} hover:text-white`}
										variant="white"
										asChild
										size="lg"
									>
										<Link href={slug}>
											{label} <ButtonIcon />
										</Link>
									</Button>
								</div>
							</div>
							<div className={`absolute inset-0 ${overlay}`} />
						</div>
					);
				}
			)}
		</div>
	);
};
