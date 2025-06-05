import { Mail, MapPin, Phone } from "lucide-react";
import dynamic from "next/dynamic";

// const ContactLocation = dynamic(
// 	() => import("@/components/ContactLocation").then((mod) => mod.default),
// 	{
// 		ssr: false,
// 	}
// );
export const FindOnMap = () => {
	const contactDetails = [
		{
			title: "Call us",
			details: "+234 801 234 5678",
			bgColor: "bg-primary",
			icon: Phone,
		},
		{
			title: "Email us",
			details: "info@imolefoundation.com",
			bgColor: "bg-secondary",
			icon: Mail,
		},
		{
			title: "Visit us",
			details: "123 main street, Ikeja, Lagos",
			bgColor: "bg-[#1BC7ED]",
			icon: MapPin,
		},
	];
	return (
		<div
			className="bg-scroll bg-no-repeat bg-cover bg-center min-h-[70vh] py-24 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(/assets/images/children-smiling.jpg)`,
			}}
		>
			<div className="grid container h-full text-white">
				<div className="z-20 container">
					<h2 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl">
						Find us on Google Maps
					</h2>
					<div className="mt-8 flex flex-wrap items-center justify-between gap-4">
						{contactDetails.map(
							({ icon, title, details, bgColor }, index) => {
								const Icon = icon;
								return (
									<div
										key={index}
										className="flex items-center justify-start gap-4"
									>
										<div
											className={`rounded-full p-4 lg:p-5 ${bgColor}`}
										>
											<Icon className="size-4 lg:size-5" />
										</div>
										<div>
											<h4 className="font-medium text-base text-gray-300">
												{title}
											</h4>
											<p className="text-lg md:text-xl mt-1">
												{details}
											</p>
										</div>
									</div>
								);
							}
						)}
					</div>
					{/* <ContactLocation /> */}
				</div>
			</div>
			<div className={`absolute inset-0 bg-primary/70`} />
		</div>
	);
};
