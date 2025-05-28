import Link from "next/link";
import { Montserrat } from "next/font/google";

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
			<div className="logo-container responsive">
				<div className="geometric-logo responsive">
					<div className="hex responsive hex1"></div>
					<div className="hex responsive hex2"></div>
					<div className="hex responsive hex3"></div>
					<div className="hex responsive hex4"></div>
				</div>
			</div>
			<h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-5 uppercase">
				Imole Network
				<br />
				<span className="text-base md:text-lg">Foundation</span>
			</h2>
		</Link>
	);
};
