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
import { RequiredAsterisk } from "../shared/RequiredAsterisk";
import { contactForm } from "@/lib/actions/user/contact.actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	subject: z.string({
		required_error: "Subject is required.",
	}),
	message: z.string().min(10, {
		message: "Message must be at least 10 characters.",
	}),
});

export function ContactForm() {
	const router = useRouter();
	const [value, setValue] = useState<string | undefined>(undefined);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const contact = {
				name: data.name,
				email: data.email,
				phoneNumber: value,
				subject: data.subject,
				message: data.message,
			};
			const res = await contactForm(contact);

			if (res?.status == 400) return toast.error(res?.message);

			toast.success(res?.message);
			router.push(`/success-contact?id=${res?.contact?._id}`);
		} catch (error: any) {
			toast.error(error.message || "An error occurred!");
		}
	}

	return (
		<div
			className="bg-scroll bg-[#F3EDDA] bg-no-repeat bg-contain bg-top-right py-16 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/line-bg.png)`,
			}}
		>
			<div className="container">
				<h2 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
					Have a Question?
				</h2>
				<div className="max-w-5xl mt-8 mx-auto">
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
										<FormLabel>
											Phone Number <RequiredAsterisk />
										</FormLabel>
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
								name="subject"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Subject <RequiredAsterisk />
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
												{subjects.map(
													(subject, index) => (
														<SelectItem
															key={index}
															value={subject.type}
														>
															{subject.label}
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
										<FormLabel>
											Message <RequiredAsterisk />
										</FormLabel>
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
								>
									{form.formState.isSubmitting
										? "Sending..."
										: "Send message"}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
