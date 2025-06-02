import Image from "next/image";
import { Header } from "./Header";

export const Showcase = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			className="text-white bg-scroll bg-no-repeat bg-cover bg-left min-h-[80vh] relative"
			style={{
				backgroundImage: `url(/assets/images/help-bg.png)`,
			}}
		>
			<Header />
			<div className="container pt-12 pb-16 lg:py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="order-2 md:order-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
					{children}
				</div>
				<Image
					src={"/assets/images/showcase-image-2.png"}
					alt={
						"A picture of an Africa child smiling with a dread headstyle"
					}
					width={1000}
					height={1000}
					className="size-full object-cover order-1 md:order-1"
				/>
			</div>
		</div>
	);
};
