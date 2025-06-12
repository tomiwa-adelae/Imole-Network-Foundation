"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { mobileNavLinks } from "@/constants";
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
import { ScrollArea } from "../ui/scroll-area";

export function MobileNavbar() {
	const [openMobile, setOpenMobile] = useState(false); // <-- add state
	const pathname = usePathname();

	const isMobile = useIsMobile();

	const handleClick = () => {
		if (setOpenMobile) {
			setOpenMobile(false);
		}
	};

	const isActive = (slug: string) =>
		pathname === slug || pathname.startsWith(`${slug}/`);

	return (
		<Sheet open={openMobile} onOpenChange={setOpenMobile}>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					className="hover:bg-transparent hover:text-muted-foreground"
					size={"icon"}
				>
					<MenuIcon className="size-6" />
				</Button>
			</SheetTrigger>
			<SheetContent className="h-screen py-4" side={"left"}>
				<ScrollArea className="h-screen">
					<div className="container pb-20">
						<div className="flex flex-1 flex-col overflow-x-hidden">
							<SheetClose asChild>
								<Logo />
							</SheetClose>
							<div className="mt-6 flex flex-col gap-1">
								{mobileNavLinks.map((link, idx) => {
									return (
										<Link
											key={idx}
											href={link.slug}
											className={`group flex items-center justify-start gap-2 group/sidebar
                            ${
								isActive(link.slug) && "bg-[#F2F2F2]"
							} hover:bg-[#F2F2F2] p-4 rounded-lg
                            `}
											onClick={handleClick}
										>
											<h5 className="text-sm font-medium">
												{link.label}
											</h5>
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
									<Link href="/donate">Donate now</Link>
								</Button>
								<Button
									asChild
									size="md"
									className="text-sm w-full"
									variant={"ghost"}
								>
									<Link href="/volunteer">
										Become a volunteer
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}
