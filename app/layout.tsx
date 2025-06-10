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
	title: "Imọlẹ Progressive Network Foundation | Serving Humanity with Love and Light",
	description:
		"Imọlẹ Progressive Network Foundation is a Nigerian non-profit dedicated to empowering communities through education, health support, and food relief. Join us in serving people and changing lives.",
	keywords:
		"Imọlẹ Foundation, Nigerian NGO, community support, nonprofit in Nigeria, education charity, health outreach, food relief, humanitarian organization Nigeria",
	openGraph: {
		images: "/assets/images/opengraph.png",
	},
	metadataBase: new URL("https://imoleprogressivenetwork.org"),
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
				<meta
					property="og:image"
					content="/assets/images/opengraph.png"
				/>
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
			</Head>
			<body className={`${dmsans.className} antialiased`}>
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
