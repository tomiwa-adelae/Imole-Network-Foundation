import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Clock, Heart, User } from "lucide-react";
import { Separator } from "./ui/separator";
import { socialLinks } from "@/constants";

export const BlogDetails = () => {
	return (
		<div className="py-16 relative">
			<div className="container grid grid-cols-1 lg:grid-cols-6 gap-4">
				<div className="col-span-1 lg:col-span-4">
					<Image
						src={"/assets/images/children-smiling.jpg"}
						alt="Shildin"
						width={1000}
						height={1000}
						className="aspect-auto object-cover rounded-md"
					/>
					<h2 className="font-semibold text-xl mt-4 lg:text-2xl">
						Help for Kids Education Donate Money
					</h2>
					<div className="flex items-center justify-start gap-4">
						<p className="mt-2 text-sm text-muted-foreground">
							<User className="size-5 inline-block mr-2" />
							<span>By Admin</span>
						</p>
						<p className="mt-2 text-sm text-muted-foreground">
							<Clock className="size-5 inline-block mr-2" />
							<span>Dec 10, 2025</span>
						</p>
					</div>
					<Separator className="my-4" />
					<div className="space-y-4">
						<p className="text-base leading-relaxed">
							When to Use Lorem Ipsum generally, lorem ipsum is
							best suited to keeping template fo looking bare or
							minimizing the distractions of the draft copy.
							<br />
							Second, use lorem ipsum if you think placeholder
							text will distracting. in voluptate velit esse.
							Cursus libero viverra. One of the most remarkable
							applications of AI in healthcare is in diagnostics.
							Machine and learning algorithms are capable of
							analyzing vast amounts of medical data with speed to
							unprecedente speed and accuracy. This has led to
							earlier and more precise disease speed detection,
							greatly enhancing the chances of successful
							treatment.
						</p>
						<p className="text-base leading-relaxed">
							One of the most remarkable applications of AI in
							healthcare is in diagnostics. Machine and learning
							algorithms are capable of analyzing vast amounts of
							medical data with speed to unprecedente speed and
							accuracy. This has led to earlier and more precise
							disease speed detection, greatly enhancing the
							chances of successful treatment.
						</p>
					</div>
					<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
						<Image
							src={"/assets/images/children-smiling.jpg"}
							alt="Shildin"
							width={1000}
							height={1000}
							className="aspect-auto object-cover rounded-md"
						/>
						<Image
							src={"/assets/images/children-smiling.jpg"}
							alt="Shildin"
							width={1000}
							height={1000}
							className="aspect-auto object-cover rounded-md"
						/>
					</div>
					<div className="flex items-center justify-start gap-2 mt-8">
						<p className="text-sm text-muted-foreground font-medium">
							Share:
						</p>
						<div className="flex items-center text-primary justify-start gap-6">
							{socialLinks.map(({ icon, name, slug }, index) => {
								const Icon = icon;
								return (
									<Button
										size="icon"
										asChild
										variant="outline"
										key={index}
									>
										<a href={slug} target="_blank">
											<Icon className="hover:text-secondary transition-all" />
										</a>
									</Button>
								);
							})}
						</div>
					</div>
				</div>
				<div className="col-span-2 relative">
					<div
						className="bg-scroll sticky top-10 bg-no-repeat overflow-hidden bg-cover bg-center min-h-40 rounded-md py-16 flex items-center justify-center "
						style={{
							backgroundImage: `url(/assets/images/children-smiling.jpg)`,
						}}
					>
						<div className="grid container h-full text-white rounded-md">
							<div className="z-20 container">
								<div className="text-center flex flex-col items-center justify-center">
									<Image
										src={"/assets/images/logo.png"}
										alt="Imole Network Foundation logo"
										width={1000}
										height={1000}
										className="size-20 object-cover mx-auto"
									/>
									<h2 className="text-2xl font-semibold my-4">
										Helping people
									</h2>
									<Button
										variant="secondary"
										asChild
										size="lg"
									>
										<Link href="/donate">
											Donate now <Heart />
										</Link>
									</Button>
								</div>
							</div>
						</div>
						<div className={`absolute inset-0 bg-black/70`} />
					</div>
				</div>
			</div>
		</div>
	);
};
