import Link from "next/link";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
	return (
		<Link
			className={`${montserrat.className} flex items-center justify-start gap-2 hover:text-secondary transition-all`}
			href="/"
		>
			<Image
				src={"/assets/images/logo.png"}
				alt="Imọlẹ Progressive Network Foundation logo"
				width={1000}
				height={1000}
				className="size-16 lg:size-20 object-cover"
			/>
			<h2 className="text-lg md:text-xl font-semibold leading-5 uppercase">
				Imọlẹ progressive
				<br />
				<span className="text-base">
					Network <span className="hidden md:block">Foundation</span>
				</span>
			</h2>
		</Link>
	);
};
