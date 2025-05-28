"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/constants";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/Logo";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname, useRouter } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";

export function MobileNavbar() {
	const [openMobile, setOpenMobile] = useState(false); // <-- add state
	const pathname = usePathname();

	const isMobile = useIsMobile();

	const handleClick = () => {
		if (setOpenMobile) {
			setOpenMobile(false);
		}
	};

	return (
		<Sheet open={openMobile} onOpenChange={setOpenMobile}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="hover:bg-transparent"
					size={"icon"}
				>
					<MenuIcon className="size-6 hover:text-secondary" />
				</Button>
			</SheetTrigger>
			<SheetContent className="h-screen py-4" side={"left"}>
				<div className="container">
					<div className="flex flex-1 flex-col overflow-x-hidden">
						<SheetClose asChild>
							<Logo />
						</SheetClose>
						<div className="mt-8 flex flex-col gap-4">
							{navLinks.map((link, idx) => {
								const isActive =
									pathname === link.slug ||
									pathname.startsWith(`${link.slug}/`);
								return (
									<Link
										key={idx}
										href={link.slug}
										className={`group flex items-center justify-start gap-2 group/sidebar py-2
                            ${
								isActive
									? "text-primary"
									: "text-black dark:text-white text-sm"
							} hover:text-primary
                            `}
										onClick={handleClick}
									>
										<span className="text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0 font-medium">
											{link.label}
										</span>
									</Link>
								);
							})}
						</div>
						<div className="flex flex-col mt-4 w-full items-center justify-end gap-4">
							<Button
								asChild
								size="md"
								className="text-sm w-full"
							>
								<Link href="/book">Donate now</Link>
							</Button>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
