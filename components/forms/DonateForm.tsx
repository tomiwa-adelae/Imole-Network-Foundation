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
// import { usePaystackPayment } from "react-paystack";

const FormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	type: z.string({
		required_error: "Donation type is required.",
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

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		// try {
		// 	// Move this hook out of the handleSubmit function
		// 	const config = {
		// 		reference: new Date().getTime().toString(),
		// 		email: data.email,
		// 		amount: Number(data.amount) * 100, // Convert to kobo
		// 		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
		// 		metadata: {
		// 			name: data.name,
		// 			custom_fields: [
		// 				{
		// 					display_name: "Full Name",
		// 					variable_name: "full_name",
		// 					value: data.name,
		// 				},
		// 			],
		// 		},
		// 	};
		// 	const onSuccess = async (reference: any) => {
		// 		try {
		// 			const details = {
		// 				spaceId,
		// 				userId,
		// 				trxref: reference.trxref,
		// 				transactionId: reference.transaction,
		// 				paymentStatus:
		// 					reference.status === "success" ? "paid" : "failed",
		// 				bookingStatus: "confirmed",
		// 				noOfHours,
		// 				noOfWeeks,
		// 				noOfDays,
		// 				noOfMonths,
		// 				noOfUsers,
		// 				totalAmount: totalPrice,
		// 				bookingStartDate,
		// 				bookingEndDate,
		// 				bookingType: booking,
		// 			};
		// 			const res = await createBooking({ ...details });
		// 			if (res.status === 400) return toast.error(res.message);
		// 			toast.success(res.message);
		// 			setLoading(false);
		// 			router.push(
		// 				`/spaces/${spaceId}/book/success?id=${res?.booking?._id}`
		// 			);
		// 		} catch (error) {
		// 			setLoading(false);
		// 			toast.error("An error occurred! Try again later.");
		// 		} finally {
		// 			setLoading(false);
		// 		}
		// 	};
		// 	const onClose = () => {
		// 		toast.error("An error occurred! Try again later");
		// 	};
		// 	const initializePayment = usePaystackPayment(config);
		// } catch (error) {}
		toast.success("Donation successful");
		// router.push')
	}

	return (
		<div className="bg-[#F3EDDA] relative">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src={"/assets/images/gallery8.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-16 lg:py-24 container order-1 md:order-2">
					<div className="md:container">
						<h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl mb-8">
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
