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
		title: "Imọlẹ Progressive Network Foundation",
		description:
			"Empowering communities in Nigeria through education, healthcare, and food relief.",
		url: "https://imoleprogressivenetwork.org",
		siteName: "Imọlẹ Foundation",
		images: [
			{
				url: "/assets/opengraph.png", // ✅ Relative to metadataBase
				width: 1200,
				height: 630,
				alt: "Imọlẹ Foundation OG Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	metadataBase: new URL("https://imoleprogressivenetwork.org"), // ✅ Use your live domain
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${dmsans.className} antialiased`}>
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
