import {
	Facebook,
	Instagram,
	Twitter,
	HandCoins,
	HeartHandshake,
	Heart,
	ChevronRight,
	HandHelping,
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

export const mobileNavLinks = [
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
		label: "Our Blogs",
	},
	{
		slug: "/contact",
		label: "Contact us",
	},
	{
		slug: "/gallery",
		label: "Our gallery",
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
				slug: "/projects",
				label: "Our projects",
			},
			{
				slug: "/gallery",
				label: "Our gallery",
			},
			{
				slug: "/donate",
				label: "Donate now",
			},
			{
				slug: "/volunteer",
				label: "Become a volunteer",
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
		buttonIcon: HandHelping,
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

export const ourGoals = [
	{
		title: "Quality Education",
		content:
			"Every child deserves the chance to learn, grow, and dream. We work to break the barriers that keep children out of school — poverty, lack of supplies, or poor infrastructure. Our education initiatives include school supply drives, scholarship support, and mentorship programs to help children stay in school and succeed.",
	},
	{
		title: "Affordable Healthcare",
		content:
			"Many communities in Nigeria still lack access to basic health services. Our goal is to bridge that gap by organizing free medical outreaches, providing medications, health checkups, and hosting awareness programs that focus on maternal health, hygiene, and disease prevention.",
	},
	{
		title: "Combat Hunger",
		content:
			"Hunger doesn’t just rob the body — it steals potential. We run feeding programs, distribute food relief packs, and support low-income families to ensure that children and adults alike have the nutrition they need to live healthy and productive lives.",
	},
	{
		title: "Community Service",
		content:
			"We believe lasting change starts at the grassroots. That’s why we recruit and train volunteers who are passionate about serving. Through community-based projects, clean-up campaigns, youth mentoring, and local empowerment programs, we build hope from the ground up.",
	},
	{
		title: "Social Equity",
		content:
			"Our vision goes beyond short-term aid. We’re committed to creating systems that last — from supporting small businesses and women-led initiatives to providing clean water and sanitation education. Every goal is rooted in sustainability and fairness.",
	},
];

export const subjects = [
	{
		type: "volunteer",
		label: "I want to Volunteer",
	},
	{
		type: "donation",
		label: "I want to a donation",
	},
	{
		type: "partnership",
		label: "Partnership or Collaboration",
	},
	{
		type: "general",
		label: "General Inquiry",
	},
	{
		type: "event",
		label: "Request to attend or host an Event",
	},
	{
		type: "support",
		label: "I need Help or Support",
	},
	{
		type: "feedback",
		label: "Feedback or Suggestions",
	},
	{
		type: "media",
		label: "Media or Press Inquiry",
	},
];

export const ourProjects = [
	{
		id: "1",
		title: "Back-to-School Drive",
		description:
			"Equipping children with school kits and materials so they can learn with confidence and dignity.",
		src: "/assets/images/children-smiling.jpg",
		category: "Domestic & Transportation",
	},
	{
		id: "2",
		title: "Medical Outreach Program",
		description:
			"Bringing free medical care and health education to rural communities across Nigeria.",
		src: "/assets/images/children-smiling.jpg",
		category: "Education",
	},
	{
		id: "3",
		title: "Feed a Family Campaign",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		src: "/assets/images/children-smiling.jpg",
		category: "Community Development",
	},
	{
		id: "4",
		title: "Health Support Initiative",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		src: "/assets/images/children-smiling.jpg",
		category: "Healthcare",
	},
	{
		id: "5",
		title: "Feed a Family Campaign",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		src: "/assets/images/children-smiling.jpg",
		category: "Community Development",
	},
	{
		id: "6",
		title: "Health Support Initiative",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		src: "/assets/images/children-smiling.jpg",
		category: "Healthcare",
	},
];

export const testimonials = [
	{
		image: "/assets/images/user-one.jpeg",
		name: "Tomiwa Adelae",
		testimony:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius molestiae illo id, ab dolor modi, est aut atque iure facilis reiciendis ex exercitationem, perspiciatis fugiat consequuntur ? Dolor, itaque.",
		borderColor: "border-white",
		bgColor: "bg-secondary/20",
		textColor: "text-secondary",
		rotate: "lg:-rotate-6",
	},
	{
		image: "/assets/images/user-two.webp",
		name: "Sandra Reddington",
		testimony:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius molestiae illo id, ab dolor modi, est aut atque iure facilis reiciendis ex exercitationem, perspiciatis fugiat consequuntur ? Dolor, itaque.",
		borderColor: "border-gray-200",
		bgColor: "bg-[#FFFBFD]",
		textColor: "text-primary",
		rotate: "rotate-0",
	},
	{
		image: "/assets/images/user-three.jpg",
		name: "Israel Ibitoye",
		testimony:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius molestiae illo id, ab dolor modi, est aut atque iure facilis reiciendis ex exercitationem, perspiciatis fugiat consequuntur ? Dolor, itaque.",
		borderColor: "border-orange-400",
		bgColor: "bg-[#FEF8E8]",
		textColor: "text-orange-400",
		rotate: "lg:rotate-6",
	},
];

export const volunteeringWays = [
	{
		image: "/assets/icons/education.svg",
		name: " Community Education",
		description:
			"We believe every child deserves a chance to learn and dream big. Through tutoring, mentorship, and learning support, we help build brighter futures one lesson at a time.",
		borderColor: "border-white",
		bgColor: "bg-secondary/20",
		textColor: "text-secondary",
		rotate: "lg:-rotate-6",
	},
	{
		image: "/assets/icons/health.svg",
		name: "Health Support",
		description:
			"Access to good health is a basic right. Our health initiatives bring medical care, awareness, and wellness outreach to communities that need it most.",
		borderColor: "border-gray-200",
		bgColor: "bg-[#FFFBFD]",
		textColor: "text-primary",
		rotate: "rotate-0",
	},
	{
		image: "/assets/icons/food.svg",
		name: "Food Relief",
		description:
			"Hunger shouldn’t stand in the way of hope. We provide nutritious meals and food supplies to vulnerable children and families across communities.",
		borderColor: "border-orange-400",
		bgColor: "bg-[#FEF8E8]",
		textColor: "text-orange-400",
		rotate: "lg:rotate-6",
	},
];

export const accountDetails = [
	{
		icon: "/assets/icons/uba.png",
		bankName: "United Bank of Africa",
		accountNumber: "2143463056",
		accountName: "Imole Network Foundations",
		bgColor: "bg-[#DA0D00]/20",
		textColor: "text-[#DA0D00]",
		rotate: "lg:-rotate-6",
	},
	{
		icon: "/assets/icons/first-bank.png",
		bankName: "First Bank of Nigeria",
		accountNumber: "2143463056",
		accountName: "Imole Network Foundations",
		bgColor: "bg-[#FFFBFD]/20",
		textColor: "text-[#02446A]",
		rotate: "rotate-0",
	},
	{
		icon: "/assets/icons/gtb.jpeg",
		bankName: "Guaranty Trust Bank",
		accountNumber: "2143463056",
		accountName: "Imole Network Foundations",
		bgColor: "bg-[#D84007]/20",
		textColor: "text-[#D84007]",
		rotate: "lg:rotate-6",
	},
];

export const areaOfInterest = ["education", "health", "food", "media", "event"];
