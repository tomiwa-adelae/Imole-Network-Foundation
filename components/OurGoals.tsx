import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ourGoals } from "@/constants";
import { Button } from "./ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";

export const OurGoals = () => {
	return (
		<div
			className="bg-scroll bg-[#660066] bg-no-repeat bg-contain bg-top-right py-16 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/line-bg.png)`,
			}}
		>
			<div className="relative container text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
				<div className="col-span-1 lg:col-span-2">
					<div className="sticky top-10">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
							Our Goals
						</h2>
						<p className="mt-2 mb-6 leading-relaxed text-base">
							At Imọlẹ Progressive Network Foundation, our goals
							are rooted in compassion and driven by impact. We
							believe real change starts with clear intentions and
							that's why we’ve outlined specific, actionable goals
							to guide our work.
						</p>
						<Button variant="white" asChild size="lg">
							<Link href="/donate">
								Donate now <Heart />
							</Link>
						</Button>
					</div>
				</div>
				<div className="col-span-1 lg:col-span-3">
					<Accordion
						type="single"
						collapsible
						className="w-full"
						defaultValue="item-1"
					>
						{ourGoals.map(({ title, content }, index) => (
							<AccordionItem
								key={index}
								value={`item-${index + 1}`}
							>
								<AccordionTrigger>{title}</AccordionTrigger>
								<AccordionContent className="text-balance">
									{content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
};
