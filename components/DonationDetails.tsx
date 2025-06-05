"use client";
import { accountDetails } from "@/constants";
import { cn } from "@/lib/utils";
import { Banknote, Copy } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export const DonationDetails = () => {
	const copyTextToClipboard = async ({ text }: { text: any }) => {
		try {
			await navigator.clipboard.writeText(text);
			return toast(`Copied!`);
		} catch (err) {
			return toast("Failed to copy!");
		}
	};

	return (
		<div className="bg-white py-16">
			<div className="container">
				<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
					Donate via Bank Transfer
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-8">
					{accountDetails.map(
						(
							{
								icon,
								bankName,
								accountNumber,
								accountName,
								textColor,
								rotate,
								bgColor,
							},
							index
						) => (
							<div
								className={cn(
									"rounded-2xl p-8 hover:rotate-0 transition-all shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
									bgColor,
									rotate
								)}
								key={index}
							>
								<Image
									src={icon}
									alt={`${bankName}'s picture`}
									width={70}
									height={70}
									className={cn("object-cover")}
								/>
								<h4 className="font-medium text-2xl mt-4">
									{bankName}
								</h4>
								<div
									className={cn(
										"mt-2 space-y-2 text-base leading-relaxed",
										textColor
									)}
								>
									<p>
										Account number: {accountNumber}{" "}
										<Copy
											onClick={() =>
												copyTextToClipboard({
													text: accountNumber,
												})
											}
											className="size-4 ml-2 inline-block cursor-pointer"
										/>
									</p>
									<p>Account name: {accountName}</p>
								</div>
								<div className="flex items-center justify-end mt-2">
									<Banknote
										className={cn("size-6", textColor)}
									/>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};
