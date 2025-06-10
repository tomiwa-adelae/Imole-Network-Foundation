import type { Metadata } from "next";
import { DonationDetails } from "@/components/DonationDetails";
import { DonateForm } from "@/components/forms/DonateForm";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Showcase } from "@/components/shared/Showcase";
import { redirect } from "next/navigation";
import { emailAddress } from "@/constants";
import { getContactDetails } from "@/lib/actions/user/contact.actions";

export const metadata: Metadata = {
	title: "Success | Imọlẹ Progressive Network Foundation",
	description:
		"Support our work with your donation. Whether through bank transfer or online giving, your gift helps provide education, health care, and meals to those in need.",
	keywords:
		"Donate Nigeria, give to Imọlẹ Foundation, NGO donations, help Nigerian children, support charity Nigeria",
};

const page = async ({ searchParams }: { searchParams: any }) => {
	const { id } = await searchParams;

	if (!id) {
		return redirect("/not-found");
	}

	const res = await getContactDetails(id);

	if (res.status === 400) redirect("/not-found");

	return (
		<div>
			<Showcase>
				<h1 className="text-5xl lg:text-7xl font-bold">
					Thank you for{" "}
					<span className="italic text-secondary">contacting us</span>{" "}
				</h1>
				<p className="text-base my-6 leading-relaxed">
					Our team would get back to you very soon. If your inquiry is
					urgent, feel free to contact us directly at{" "}
					<a
						className="hover:underline"
						href={`mailto:${emailAddress}`}
					>
						{emailAddress}
					</a>
				</p>
			</Showcase>
			<DonationDetails />
			<DonateForm />
			<OurVolunteers />
		</div>
	);
};

export default page;
