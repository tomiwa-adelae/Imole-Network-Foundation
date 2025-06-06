import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/shared/Footer";

const dmsans = DM_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Imole Network Foundation | Serving Humanity with Love and Light",
	description:
		"Imole Network Foundation is a Nigerian non-profit dedicated to empowering communities through education, health support, and food relief. Join us in serving people and changing lives.",
	keywords:
		"Imole Foundation, Nigerian NGO, community support, nonprofit in Nigeria, education charity, health outreach, food relief, humanitarian organization Nigeria",
	openGraph: {
		images: "/assets/opengraph.png",
	},
	metadataBase: new URL("http://imolefoundation.vercel.app"),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta property="og:image" content="/opengraph.png" />
				<meta property="og:image" content="/assets/opengraph.png" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, user-scalable=no"
				/>
				<meta
					data-n-head="ssr"
					data-hid="viewport"
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
				/>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<body className={`${dmsans.className} antialiased`}>
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
