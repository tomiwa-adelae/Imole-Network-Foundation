"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { Button } from "@/components/ui/button";
import "react-phone-number-input/style.css";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Input } from "@/components/ui/input";
import { subjects } from "@/constants";
import { useState } from "react";
import Image from "next/image";
import { RequiredAsterisk } from "../shared/RequiredAsterisk";
import { formatMoneyInput, handleKeyDown } from "@/lib/utils";
import { Heart } from "lucide-react";

const FormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	type: z.string({
		required_error: "Donation type is required.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
	amount: z.string().min(2, { message: "Price is required." }),
});

export function DonateForm() {
	const [amount, setAmount] = useState("");
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			type: "",
			message: "",
		},
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		field: any
	) => {
		let inputValue = e.target.value;

		// If the input starts with a "0" and is followed by another number, remove the "0"
		if (
			inputValue.startsWith("0") &&
			inputValue.length > 1 &&
			inputValue[1] !== "."
		) {
			inputValue = inputValue.slice(1);
		}

		// Prevent the input from starting with a period
		if (inputValue.startsWith(".")) {
			return;
		}

		inputValue = inputValue.replace(/[^0-9.]/g, "");
		const parts = inputValue.split(".");
		if (parts.length > 2) {
			inputValue = parts.shift() + "." + parts.join("");
		}
		if (parts[1]) {
			parts[1] = parts[1].substring(0, 2);
			inputValue = parts.join(".");
		}

		if (/^[0-9,]*\.?[0-9]*$/.test(inputValue)) {
			const formattedValue = formatMoneyInput(inputValue);
			setAmount(formattedValue);
			field.onChange(formattedValue);
		}
	};

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast("You submitted the following values", {
			description: (
				<pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

	return (
		<div className="bg-[#F3EDDA] relative">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src={"/assets/images/serving-img.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-10 md:py-16 lg:py-24 container order-1 md:order-2">
					<div className="md:container">
						<h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-5xl mb-8">
							Donate online
						</h2>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Name <RequiredAsterisk />
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Your name"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Email <RequiredAsterisk />
												</FormLabel>
												<FormControl>
													<Input
														type={"email"}
														placeholder="Your email"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<FormField
									control={form.control}
									name="amount"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Price <RequiredAsterisk />
											</FormLabel>
											<Input
												onKeyDown={handleKeyDown}
												id="decimalInput"
												inputMode="decimal"
												value={amount}
												onChange={(e) =>
													handleChange(e, field)
												}
												placeholder="0.00"
												className="number-input"
											/>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="type"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Donation type{" "}
												<RequiredAsterisk />
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select a subject" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem
														value={"one-time"}
													>
														One time donation
													</SelectItem>
													<SelectItem
														value={"monthly"}
													>
														Monthly donation
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex items-center justify-center">
									<Button
										disabled={form.formState.isSubmitting}
										size="lg"
										type="submit"
										className="w-full"
									>
										{form.formState.isSubmitting
											? "Donating..."
											: "Donate now"}{" "}
										<Heart />
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
