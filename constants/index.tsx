import {
	Facebook,
	Instagram,
	Twitter,
	HandCoins,
	HeartHandshake,
	Heart,
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

export const emailAddress = "imoleprogressivenetwork@gmail.com";
export const phoneNumber = "+234 814 613 1427";
export const address =
	"N0. 1, Government Estate Opposite CIB, Alagbaka, Akure, Ondo State, Nigeria";

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
		slug: "https://www.twitter.com",
	},
	{
		name: "Instagram",
		icon: Facebook,
		slug: "https://www.facebook.com",
	},
	{
		name: "Instagram",
		icon: Instagram,
		slug: "https://www.instagram.com",
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

export const ourLeadership = [
	{
		image: "/assets/images/director.jpg",
		name: "Engr. Michael Adeyanju",
		portfolio: "Director General",
	},
	{
		image: "/assets/images/secretary.jpg",
		name: "Comrade Olorunfemi Christopher Ibukun",
		portfolio: "Secretary General",
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
			"At Imọlẹ, we believe education is the key to long-term transformation. In this post, we share stories of children whose lives are being changed through our community education programs from literacy to leadership.",
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
		src: "/assets/images/lennon-1.jpg",
	},
	{
		src: "/assets/images/lennon-2.jpg",
	},
	{
		src: "/assets/images/gallery2.jpg",
	},
	{
		src: "/assets/images/lennon-3.jpg",
	},
	{
		src: "/assets/images/lennon-4.jpg",
	},
	{
		src: "/assets/images/boy-smiling.jpg",
	},
	{
		src: "/assets/images/gallery1.jpg",
	},

	{
		src: "/assets/images/gallery3.jpg",
	},
	{
		src: "/assets/images/lennon-5.jpg",
	},
	{
		src: "/assets/images/lennon-6.jpg",
	},
	{
		src: "/assets/images/lennon-7.jpg",
	},
	{
		src: "/assets/images/lennon-8.jpg",
	},
	{
		src: "/assets/images/lennon-9.jpg",
	},
	{
		src: "/assets/images/lennon-10.jpg",
	},
	{
		src: "/assets/images/lennon-11.jpg",
	},
	{
		src: "/assets/images/lennon-12.jpg",
	},
	{
		src: "/assets/images/lennon-13.jpg",
	},
	{
		src: "/assets/images/children-smiling.jpg",
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
		id: "13",
		title: "Renovated Classroom Block for Lennon Jubilee High School",
		overview:
			"At Imọlẹ Progressive Network Foundation, we believe that a quality learning environment is essential to nurturing the leaders of tomorrow. In line with our commitment to educational upliftment and youth empowerment, we embarked on a renovation project at Lennon Jubilee High School—a school with great potential but limited infrastructure.",
		description: [
			"The school’s existing classroom block was in a state of disrepair—cracked walls, leaking roofs, broken windows, and insufficient seating. These conditions not only hindered learning but also compromised the safety and dignity of the students and staff.",
			"Understanding the urgent need for change, our foundation took bold action. Over several weeks, our team, along with local contractors and volunteers, completely renovated the classroom block, transforming it into a clean, well-lit, and fully functional learning space.",
			"The scope of the renovation included:",
			"Structural repairs and reinforcement of walls and roofing",
			"Installation of new desks, chairs, and blackboards",
			"Tiling and repainting of classrooms in bright, welcoming colors",
			"Provision of ceiling fans and ventilation to enhance comfort",
			"Installation of windows and doors for security and weather protection",
		],
		dedication: [
			"This project was dedicated to the advancement of education and the empowerment of youth, especially in underserved communities. With these improved facilities, students can now learn in a space that encourages focus, creativity, and confidence.",
			"Since reopening the block, school attendance has increased, and teachers report greater enthusiasm and participation from students. It is our firm belief that this investment will ripple through the lives of these young minds—building self-worth and preparing them to become the next generation of leaders.",
			"This classroom block stands as a beacon of hope, possibility, and progress. It is more than just a building—it is a foundation for dreams, a space where destinies are shaped, and a promise from Imọlẹ Progressive Network Foundation that we are here to serve, uplift, and inspire.",
		],
		image: [
			"/assets/images/lennon-6.jpg",
			"/assets/images/lennon-7.jpg",
			"/assets/images/lennon-8.jpg",
		],
		category: "Education",
		author: "Mr. Babarinde",
		date: "26th of May, 2025",
	},
	{
		id: "14",
		title: "Free Medical Outreach in Oke-Odo Community",
		overview:
			"Health is wealth, yet many in underserved communities lack access to basic healthcare. Imole Network Foundation organized a free medical outreach in Oke-Odo to provide care, screenings, and treatment to residents in need.",
		description: [
			"The outreach was held at a local primary school, transformed into a temporary clinic with consultation booths, pharmacy stations, and diagnostic areas.",
			"Over 400 people received free medical services including malaria testing, blood pressure checks, eye examinations, and general consultations.",
			"We partnered with volunteer doctors, nurses, and pharmacists to ensure professional and compassionate care throughout the day.",
			"Children were dewormed, and the elderly were given essential medications and health education resources.",
			"Beyond treatment, we focused on preventive care—educating attendees on hygiene, nutrition, and disease prevention.",
		],
		dedication: [
			"This project was dedicated to improving health access for vulnerable populations. We believe everyone deserves the right to wellness, regardless of income or location.",
			"The joy and relief on the faces of patients reaffirmed our mission. This outreach wasn’t just medical—it was deeply human.",
			"We are committed to expanding our medical programs, reaching more communities with compassionate care.",
		],
		image: ["/assets/images/children-medicine.jpg"],
		category: "Health",
		author: "Nurse Adedayo",
		date: "10th of April, 2025",
	},
	{
		id: "15",
		title: "Back-to-School Drive in Ilupeju",
		overview:
			"Recognizing the financial strain many parents face during school resumption, Imole Network Foundation launched a back-to-school drive to equip children with basic learning materials.",
		description: [
			"Over 300 schoolchildren received backpacks, notebooks, pens, school sandals, and uniforms.",
			"We partnered with local vendors to source quality items at affordable rates, enabling us to reach more students.",
			"The distribution event included motivational talks to inspire children to dream big and stay focused.",
			"Parents expressed deep gratitude, and many students who had missed school due to lack of supplies returned immediately.",
		],
		dedication: [
			"This initiative was dedicated to promoting access to education and relieving the burden on struggling families.",
			"Each backpack given represents a door reopened to learning, confidence, and hope.",
			"We’re proud to walk with the next generation, ensuring no child is left behind due to poverty.",
		],
		image: [
			"/assets/images/gallery7.jpg",
			"/assets/images/gallery3.jpg",
			"/assets/images/serving-img.jpg",
		],
		category: "Education",
		author: "Ms. Omolola",
		date: "5th of January, 2025",
	},
	{
		id: "16",
		title: "Clean Water Project for Ayetoro Village",
		overview:
			"Access to safe drinking water remains a challenge in many rural areas. Imole Network Foundation responded by providing a clean and sustainable water source to Ayetoro village.",
		description: [
			"A borehole was drilled and fitted with a hand pump and filtration system to serve over 600 residents.",
			"We ensured community involvement from start to finish, creating a sense of ownership and responsibility.",
			"Health officers sensitized the villagers on hygiene, water conservation, and sanitation practices.",
			"This project drastically reduced cases of waterborne diseases in the area within just weeks of completion.",
		],
		dedication: [
			"This clean water project was dedicated to health, dignity, and sustainable development.",
			"Ayetoro now has not just water, but also a future less burdened by disease and daily struggles.",
			"This is just one of many steps we plan to take in bridging the water gap in underserved communities.",
		],
		image: ["/assets/images/gallery5.jpg", "/assets/images/gallery4.jpg"],
		category: "Health",
		author: "Engr. Ayoola",
		date: "3rd of March, 2025",
	},
	{
		id: "17",
		title: "Food Relief Campaign in Ibadan",
		overview:
			"In response to rising food insecurity, Imole Network Foundation launched a food relief campaign to support families facing hardship in Ibadan.",
		description: [
			"Over 1,000 food packages were distributed, containing rice, beans, garri, cooking oil, and hygiene supplies.",
			"The event targeted widows, the elderly, and low-income families in the Aremo and Mokola districts.",
			"Volunteers helped with packaging and delivery, ensuring orderly distribution and fairness.",
			"The campaign brought hope, smiles, and temporary relief to many families struggling to afford a daily meal.",
		],
		dedication: [
			"This project was dedicated to restoring dignity through food and care.",
			"We know that a well-fed child can learn better, and a supported mother can build again.",
			"Imole will continue to serve where hunger persists, guided by compassion and action.",
		],
		image: [
			"/assets/images/gallery6.jpg",
			"/assets/images/children-smiling.jpg",
		],
		category: "Food & Nutrition",
		author: "Mrs. Ajibola",
		date: "18th of February, 2025",
	},
	{
		id: "18",
		title: "Digital Literacy Workshop for Teens",
		overview:
			"With the world rapidly digitizing, Imole Network Foundation hosted a free digital literacy workshop for teenagers to build 21st-century skills and bridge the digital divide.",
		description: [
			"The 5-day workshop covered basic computer use, internet safety, digital communication, and introductory coding.",
			"Participants learned how to create presentations, send professional emails, and explore online learning tools.",
			"The workshop was held in partnership with a local tech hub, with mentorship from young professionals in tech.",
			"Each teen left with a certificate and a newfound curiosity for the digital world.",
		],
		dedication: [
			"This project was dedicated to preparing our youth for future opportunities in a tech-driven world.",
			"We believe digital access is not a privilege but a necessity for every child.",
			"This is part of our broader mission to empower the next generation with knowledge and opportunity.",
		],
		image: [
			"/assets/images/gallery1.jpg",
			"/assets/images/boy-smiling.jpg",
		],
		category: "Youth Empowerment",
		author: "Mr. Dauda",
		date: "22nd of June, 2025",
	},
	{
		id: "19",
		title: "Community Sanitation Day in Bariga",
		overview:
			"Environmental hygiene is crucial to public health. Imole Network Foundation mobilized the Bariga community for a massive cleanup and sensitization campaign.",
		description: [
			"Volunteers and residents came together to clean up streets, gutters, and marketplaces plagued by waste.",
			"We distributed sanitation kits including gloves, brooms, face masks, and trash bags.",
			"Health officials held open-air talks on proper waste disposal and disease prevention.",
			"The event fostered community bonding and inspired a renewed sense of environmental responsibility.",
		],
		dedication: [
			"This project was dedicated to promoting clean, healthy, and livable environments for all.",
			"A clean community is a safe community—and together, we proved that change is possible when we unite.",
			"Imole Network Foundation will continue to support environmental efforts across more local areas.",
		],
		image: [
			"/assets/images/gallery2.jpg",
			"/assets/images/gallery4.jpg",
			"/assets/images/lennon-11.jpg",
		],
		category: "Community Development",
		author: "Dr. Sanni",
		date: "9th of May, 2025",
	},
];

export const testimonials = [
	{
		image: "/assets/images/user-one.jpeg",
		name: "Adebayo Yusuf",
		testimony:
			"Volunteering with Imọlẹ changed the way I see community service. I thought I was giving my time, but I received so much joy, purpose, and a deeper connection to people.",
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
			"We partnered with Imọlẹ on a medical outreach in a remote village, and I was deeply moved by the professionalism and compassion they showed. This is how change truly happens.",
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
		accountName: "Imọlẹ Progressive Network Foundations",
		bgColor: "bg-[#DA0D00]/20",
		textColor: "text-[#DA0D00]",
		rotate: "lg:-rotate-6",
	},
	{
		icon: "/assets/icons/first-bank.png",
		bankName: "First Bank of Nigeria",
		accountNumber: "2143463056",
		accountName: "Imọlẹ Progressive Network Foundations",
		bgColor: "bg-[#FFFBFD]/20",
		textColor: "text-[#02446A]",
		rotate: "rotate-0",
	},
	{
		icon: "/assets/icons/gtb.jpeg",
		bankName: "Guaranty Trust Bank",
		accountNumber: "2143463056",
		accountName: "Imọlẹ Progressive Network Foundations",
		bgColor: "bg-[#D84007]/20",
		textColor: "text-[#D84007]",
		rotate: "lg:rotate-6",
	},
];

export const areaOfInterest = ["education", "health", "food", "media", "event"];

export const WEBSITE_URL = "https://imoleprogressivenetwork.org";
