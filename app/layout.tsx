import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Footer } from "@/components/shared/Footer";

const dmsans = DM_Sans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Imole Network Foundations",
	description: "Generated by create next app",
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
				<Footer />
			</body>
		</html>
	);
}
