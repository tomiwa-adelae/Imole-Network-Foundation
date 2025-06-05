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
import { areaOfInterest, subjects } from "@/constants";
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
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	area: z.string().optional(),
	message: z.string().optional(),
});

export function VolunteerForm() {
	const [value, setValue] = useState<string | undefined>(undefined);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			area: "",
			message: "",
		},
	});

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
					src={"/assets/images/boy-smiling.jpg"}
					alt={"A group of people in a picture"}
					width={1000}
					height={1000}
					className="aspect-auto size-full object-cover order-2 md:order-1"
				/>
				<div className="py-10 md:py-16 lg:py-24 container order-1 md:order-2">
					<div className="md:container">
						<h2 className="text-primary font-semibold text-3xl md:text-4xl lg:text-5xl mb-8">
							Serve. Impact. Inspire.
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
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Phone Number</FormLabel>
											<FormControl>
												<PhoneInput
													placeholder="Enter phone number"
													value={value}
													onChange={(phone) => {
														setValue(phone);
														field.onChange(phone); // Ensure form gets updated
													}}
													defaultCountry="NG"
													className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="area"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Area of interest
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select an area" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{areaOfInterest.map(
														(area, index) => (
															<SelectItem
																key={index}
																value={area}
															>
																{area}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Message</FormLabel>
											<FormControl>
												<Textarea
													placeholder="We are happy to hear your inquiries..."
													className="resize-none"
													{...field}
												/>
											</FormControl>
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
											? "Submitting..."
											: "Submit"}{" "}
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
