import Image from "next/image";
import { hereToHelp } from "@/constants";

export const HereToHelp = () => {
	return (
		<div
			className="text-white bg-scroll bg-no-repeat bg-cover bg-center py-16 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/help-bg.png)`,
			}}
		>
			<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
					We're here to <span className="text-secondary">Help</span>
				</h2>
				{hereToHelp.map(({ image, title, description }, index) => (
					<div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center text-center group">
						<Image
							src={image}
							alt={`${title}'s picture`}
							width={1000}
							height={1000}
							className="size-auto object-cover group-hover:flip transition-all"
						/>
						<h4 className="font-semibold text-black text-xl mt-6">
							{title}
						</h4>
						<p className="text-base mt-4 text-muted-foreground">
							{description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
