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
		suffix: "M+",
		title: "Total Donation",
	},
	{
		image: "/assets/images/counter2.png",
		number: "10",
		suffix: "K+",
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
		image: "/assets/images/gallery7.jpg",
		title: "Join Us and Become a Volunteer",
		icon: HeartHandshake,
		description:
			"Use your time, skills, and heart to impact lives and uplift communities. Together, we can serve, grow, and shine the light of hope across Nigeria.",
		slug: "/volunteer",
		label: "Become a Volunteer",
		buttonIcon: HandHelping,
		overlay: "bg-[#660066]/50",
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
		hover: "hover:bg-[#660066]",
	},
];

export const latestNews = [
	{
		id: "1",
		image: "/assets/images/gallery7.jpg",
		title: "Lighting the Path: How Education is Changing Lives in Rural Nigeria",
		excerpt:
			"At Imole, we believe education is the key to long-term transformation. In this post, we share stories of children whose lives are being changed through our community education programs from literacy to leadership.",
	},
	{
		id: "2",
		image: "/assets/images/children-medicine.jpg",
		title: "Beyond Medicine: Bringing Health and Hope to the Undeserved",
		excerpt:
			"Health is more than just medicine; it's dignity. Read about our latest medical outreach in Ogun State, where we provided free checkups, medication, and health education to over 500 people.",
	},
	{
		id: "3",
		image: "/assets/images/gallery6.jpg",
		title: "No Child Should Go to Bed Hungry: Our Food Relief Efforts",
		excerpt:
			"Hunger is a silent struggle in many communities. This blog details how our food relief initiative is reaching families in crisis and how one donated meal can restore hope.",
	},
	{
		id: "4",
		image: "/assets/images/serving-img.jpg",
		title: "Volunteering with Impact: Real Stories from the Field",
		excerpt:
			"Meet three of our incredible volunteers who are giving their time and talent to serve others. From teaching to logistics, their stories show that anyone can make a difference.",
	},
	{
		id: "5",
		image: "/assets/images/gallery4.jpg",
		title: "Why Community Partnerships Are the Heart of What We Do",
		excerpt:
			"We don’t work alone and we never want to. Learn how partnerships with local leaders, schools, and health workers help us reach more lives with greater impact.",
	},
	{
		id: "6",
		image: "/assets/images/boy-smiling.jpg",
		title: "Raising the Next Generation of Leaders Through Service",
		excerpt:
			"We’re not just helping we’re empowering. This article explores how youth involvement in our programs is shaping the next generation of compassionate Nigerian leaders.",
	},
];

export const galleryImages = [
	{
		src: "/assets/images/children-smiling.jpg",
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
		src: "/assets/images/donate-cta.jpg",
	},
	{
		src: "/assets/images/gallery6.jpg",
	},
	{
		src: "/assets/images/gallery7.jpg",
	},
	{
		src: "/assets/images/gallery8.jpg",
	},
	{
		src: "/assets/images/volunteer-one.jpeg",
	},
	{
		src: "/assets/images/volunteer-three.jpg",
	},
	{
		src: "/assets/images/volunteer-four.jpg",
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
		image: "/assets/images/help3.png",
		title: "Healthy Foods",
		description:
			"No one should go to bed hungry. We distribute nutritious meals and food supplies to vulnerable children and families across Nigeria.",
	},
];

export const ourGoals = [
	{
		title: "Quality Education",
		content:
			"Every child deserves the chance to learn, grow, and dream. We work to break the barriers that keep children out of school such as poverty, lack of supplies, or poor infrastructure. Our education initiatives include school supply drives, scholarship support, and mentorship programs to help children stay in school and succeed.",
	},
	{
		title: "Affordable Healthcare",
		content:
			"Many communities in Nigeria still lack access to basic health services. Our goal is to bridge that gap by organizing free medical outreaches, providing medications, health checkups, and hosting awareness programs that focus on maternal health, hygiene, and disease prevention.",
	},
	{
		title: "Combat Hunger",
		content:
			"Hunger doesn’t just rob the body, it steals potential. We run feeding programs, distribute food relief packs, and support low-income families to ensure that children and adults alike have the nutrition they need to live healthy and productive lives.",
	},
	{
		title: "Community Service",
		content:
			"We believe lasting change starts at the grassroots. That’s why we recruit and train volunteers who are passionate about serving. Through community-based projects, clean-up campaigns, youth mentoring, and local empowerment programs, we build hope from the ground up.",
	},
	{
		title: "Social Equity",
		content:
			"Our vision goes beyond short-term aid. We’re committed to creating systems that last, from supporting small businesses and women-led initiatives to providing clean water and sanitation education. Every goal is rooted in sustainability and fairness.",
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
		image: "/assets/images/gallery7.jpg",
		category: "Domestic & Transportation",
	},
	{
		id: "2",
		title: "Medical Outreach Program",
		description:
			"Bringing free medical care and health education to rural communities across Nigeria.",
		image: "/assets/images/children-medicine.jpg",
		category: "Medical",
	},
	{
		id: "3",
		title: "Feed a Family Campaign",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		image: "/assets/images/gallery6.jpg",
		category: "Community Development",
	},
	{
		id: "4",
		title: "Health Support Initiative",
		description:
			"Providing food packages and support to vulnerable families facing hunger and malnutrition",
		image: "/assets/images/healthcare.jpg",
		category: "Healthcare",
	},
];

export const testimonials = [
	{
		image: "/assets/images/user-one.jpeg",
		name: "Adebayo Yusuf",
		testimony:
			"Volunteering with Imole changed the way I see community service. I thought I was giving my time, but I received so much joy, purpose, and a deeper connection to people.",
		borderColor: "border-white",
		bgColor: "bg-[#660066]/10",
		textColor: "text-[#660066]",
		rotate: "lg:-rotate-6",
	},
	{
		image: "/assets/images/user-two.webp",
		name: " Adaeze Chukwu",
		testimony:
			"I was a single mother struggling to feed my kids. The foundation showed up with food, school supplies, and love. They reminded me that I wasn’t alone.",
		borderColor: "border-gray-200",
		bgColor: "bg-[#FFFBFD]",
		textColor: "text-primary",
		rotate: "rotate-0",
	},
	{
		image: "/assets/images/user-three.jpg",
		name: "Dr. Kunle Adebanjo",
		testimony:
			"We partnered with Imole on a medical outreach in a remote village, and I was deeply moved by the professionalism and compassion they showed. This is how change truly happens.",
		borderColor: "border-secondary",
		bgColor: "bg-secondary/10",
		textColor: "text-secondary",
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
		bgColor: "bg-[#660066]/10",
		textColor: "text-[#660066]",
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
		borderColor: "border-secondary",
		bgColor: "bg-secondary/10",
		textColor: "text-secondary",
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
