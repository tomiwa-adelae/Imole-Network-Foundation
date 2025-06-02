import React from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import { navLinks } from "@/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { MobileNavbar } from "@/components/shared/MobileNavbar";

export const Header = () => {
	return (
		<header className="py-4 flex items-center justify-center">
			<div className="container flex items-center justify-between gap-4">
				<Logo />
				<nav className="hidden flex-1 lg:flex items-center justify-center gap-2 lg:gap-8">
					{navLinks.map((link, idx) => (
						<Link
							key={idx}
							href={link.slug}
							className="text-sm font-medium hover:text-secondary transition-all"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="flex items-center justify-end gap-4">
					<div className="hidden md:block">
						<Button variant="secondary" asChild size="md">
							<Link href="/donate">
								Give <Heart />
							</Link>
						</Button>
					</div>
					<div className="lg:hidden">
						<MobileNavbar />
					</div>
				</div>
			</div>
		</header>
	);
};
