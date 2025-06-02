import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/shared/Logo";
import { footerDetails, socialLinks } from "@/constants";

export const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer
			className="bg-scroll bg-no-repeat bg-cover bg-left flex items-center justify-center relative py-8 md:py-12 lg:py-16 text-white"
			style={{
				backgroundImage: `url(/assets/images/help-bg.png)`,
			}}
			// className="bg-primary py-8 md:py-12 lg:py-16 text-white"
		>
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
					<div className="col-span-2 md:col-span-1 lg:col-span-2">
						<Logo />
						<p className="transition-all hidden md:block mt-8 font-medium text-sm">
							&copy; {year} Imole Network Foundations. All rights
							reserved.
						</p>
					</div>
					{footerDetails.map(({ title, links }, index) => (
						<div className="col-span-2 md:col-span-1" key={index}>
							<h3 className="text-sm md:text-base font-semibold tracking-wider">
								{title}
							</h3>
							<ul className="mt-4 space-y-4">
								{links.map(({ slug, label }, idx) => (
									<li key={idx}>
										<Link
											className="text-sm hover:text-secondary transition-all text-white/80"
											href={slug}
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
							{index !== 0 && (
								<div className="flex items-center text-primary justify-start gap-6 mt-8">
									{socialLinks.map(
										({ icon, name, slug }, index) => {
											const Icon = icon;
											return (
												<Button
													size="icon"
													asChild
													variant="outline"
													key={index}
												>
													<a
														href={slug}
														target="_blank"
													>
														<Icon className="hover:text-secondary transition-all" />
													</a>
												</Button>
											);
										}
									)}
								</div>
							)}
						</div>
					))}
				</div>
				<p className="transition-all mt-8 md:hidden font-medium text-sm">
					&copy; {year} Imole Network Foundations. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};
