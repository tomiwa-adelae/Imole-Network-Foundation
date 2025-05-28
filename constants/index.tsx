import {
	Facebook,
	Instagram,
	Twitter,
	HandCoins,
	HeartHandshake,
	Heart,
	ChevronRight,
} from "lucide-react";

export const navLinks = [
	{
		slug: "/",
		label: "Home",
	},
	{
		slug: "/about",
		label: "About us",
	},
	{
		slug: "/projects",
		label: "Our projects",
	},
	{
		slug: "/blogs",
		label: "Blogs",
	},
	{
		slug: "/contact",
		label: "Contact us",
	},
];

export const emailAddress = "support@imole.com";
export const phoneNumber = "+234 801 234 5678";
export const address = "Block 7, Plot 90, Ikeja, Lagos State";

export const footerDetails = [
	{
		title: "Quick links",
		links: [
			{
				slug: "/",
				label: "Home",
			},
			{
				slug: "/about",
				label: "About us",
			},
			{
				slug: "/contact",
				label: "Contact us",
			},
			{
				slug: "/blogs",
				label: "Latest blogs",
			},
			{
				slug: "/donations",
				label: "Donations",
			},
		],
	},
	{
		title: "Contact info",
		links: [
			{
				slug: `mailto:${emailAddress}`,
				label: emailAddress,
			},
			{
				slug: `tel:${phoneNumber}`,
				label: phoneNumber,
			},
			{
				slug: address,
				label: address,
			},
		],
	},
];

export const socialLinks = [
	{
		name: "X",
		icon: Twitter,
		slug: "www.twitter.com",
	},
	{
		name: "Instagram",
		icon: Facebook,
		slug: "www.facebook.com",
	},
	{
		name: "Instagram",
		icon: Instagram,
		slug: "www.instagram.com",
	},
];

export const supportUs = [
	{
		image: "/assets/images/counter1.png",
		number: "12",
		suffix: "M",
		title: "Total Donation",
	},
	{
		image: "/assets/images/counter2.png",
		number: "10",
		suffix: "K",
		title: "Project Founded",
	},
	{
		image: "/assets/images/counter3.png",
		number: "805",
		title: "Total Volunteers",
	},
];

export const ourVolunteers = [
	{
		image: "/assets/images/volunteer-one.jpeg",
		name: "Tomiwa A.",
		portfolio: "Social Media Manager",
	},
	{
		image: "/assets/images/volunteer-two.jpg",
		name: "Fatima K",
		portfolio: "Outreach officer",
	},
	{
		image: "/assets/images/volunteer-three.jpg",
		name: "Adedayo O.",
		portfolio: "Event organizer",
	},
	{
		image: "/assets/images/volunteer-four.jpg",
		name: "Sandra R.",
		portfolio: "Content Creator",
	},
];

export const CTAs = [
	{
		image: "/assets/images/girl-smiling.jpg",
		title: "Join Us and Become a Volunteer",
		icon: HeartHandshake,
		description:
			"Use your time, skills, and heart to impact lives and uplift communities. Together, we can serve, grow, and shine the light of hope across Nigeria.",
		slug: "/volunteer",
		label: "Become a Volunteer",
		buttonIcon: Heart,
		overlay: "bg-secondary/30",
		hover: "hover:bg-primary",
	},
	{
		image: "/assets/images/children-smiling.jpg",
		title: "Start Donating For the Children",
		icon: HandCoins,
		description:
			"Your gift can put a smile on a child’s face and hope in their future. With your support, we can provide education, nutrition, and care where it’s needed most. Every naira counts and every child matters.",
		slug: "/donate",
		label: "Donate now",
		buttonIcon: Heart,
		overlay: "bg-primary/70",
		hover: "hover:bg-secondary",
	},
];

export const latestNews = [
	{
		image: "/assets/images/children-smiling.jpg",
		title: "Imole Hosts Health Outreach in Kwara State",
		excerpt:
			"Our team provided free medical care to over 500 villagers in Oro-Ago as part of our rural healthcare initiative.",
	},
	{
		image: "/assets/images/gallery4.jpg",
		title: "Free Health Outreach Brings Hope to Rural Villagers in Kwara",
		excerpt:
			"With volunteer doctors and nurses on ground, Imole Network Foundation conducted a free medical outreach in rural Kwara State. Hundreds benefited from free consultations, medications, and health education sessions focused on malaria and maternal health.",
	},
	{
		image: "/assets/images/gallery5.jpg",
		title: "Volunteers Feed Over 500 Families During Ramadan Drive",
		excerpt:
			"During the holy month of Ramadan, Imole Foundation volunteers distributed food packages to over 500 vulnerable families in Lagos and Kaduna. “It’s not just about food, it’s about sharing love,” said one of the lead coordinators.",
	},
];

export const galleryImages = [
	{
		src: "/assets/images/children-smiling.jpg",
	},
	{
		src: "/assets/images/girl-smiling.jpg",
	},
	{
		src: "/assets/images/boy-smiling.jpg",
	},
	{
		src: "/assets/images/gallery1.jpg",
	},
	{
		src: "/assets/images/gallery2.jpg",
	},
	{
		src: "/assets/images/gallery3.jpg",
	},
	{
		src: "/assets/images/gallery4.jpg",
	},
	{
		src: "/assets/images/gallery5.jpg",
	},
	{
		src: "/assets/images/children-smiling.jpg",
	},
	{
		src: "/assets/images/girl-smiling.jpg",
	},
	{
		src: "/assets/images/boy-smiling.jpg",
	},
	{
		src: "/assets/images/gallery1.jpg",
	},
	{
		src: "/assets/images/gallery2.jpg",
	},
	{
		src: "/assets/images/gallery3.jpg",
	},
	{
		src: "/assets/images/gallery4.jpg",
	},
	{
		src: "/assets/images/gallery5.jpg",
	},
];

export const hereToHelp = [
	{
		image: "/assets/images/help1.png",
		title: "Kids Education",
		description:
			"Every child deserves the light of knowledge. We provide access to quality education, school materials, and mentorship to give children a brighter future.",
	},
	{
		image: "/assets/images/help2.png",
		title: "Good Health",
		description:
			"We organize health outreaches, medical support, and awareness programs to ensure families and communities stay strong and safe.",
	},
	{
		image: "/assets/images/help1.png",
		title: "Healthy Foods",
		description:
			"No one should go to bed hungry. We distribute nutritious meals and food supplies to vulnerable children and families across Nigeria.",
	},
];

export const ourProjects = [
	{
		title: "Back-to-School Drive",
		description:
			"Equipping children with school kits and materials so they can learn with confidence and dignity.",
		src: "/assets/images/children-smiling.jpg",
	},
	{
		title: "Medical Outreach Program",
		description:
			"Bringing free medical care and health education to rural communities across Nigeria.",
		src: "/assets/images/children-smiling.jpg",
	},
	{
		title: "Feed a Family Campaign",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		src: "/assets/images/children-smiling.jpg",
	},
];
