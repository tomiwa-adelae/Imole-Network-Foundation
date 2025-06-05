import type { Metadata } from "next";
import { Header } from "@/components/shared/Header";
import { ImageShowcase } from "@/components/shared/ImageShowcase";
import { FindOnMap } from "@/components/FindOnMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { DonateCTA } from "@/components/DonateCTA";
import { Testimonials } from "@/components/shared/Testimonials";
import { GalleryMarquee } from "@/components/GalleryMarquee";

export const metadata: Metadata = {
	title: "Contact Us | Imole Network Foundation – Get in Touch Today",
	description:
		"Have questions, want to collaborate, or need help? Reach out to Imole Network Foundation. We’re here to listen, serve, and grow stronger together.",
	keywords:
		"Contact Imole Foundation, Nigerian NGO contact, reach Imole Foundation, support nonprofit Nigeria",
};

const page = () => {
	return (
		<div className="relative">
			<Header />
			<ImageShowcase
				title="Contact us"
				image={"/assets/images/donate-cta.jpg"}
			/>
			<ContactForm />
			<FindOnMap />
			<GalleryMarquee />
			<DonateCTA />
			<Testimonials />
		</div>
	);
};

export default page;
