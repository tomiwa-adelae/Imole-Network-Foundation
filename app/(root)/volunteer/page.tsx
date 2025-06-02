import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { OurVolunteers } from "@/components/OurVolunteers";
import { Showcase } from "@/components/shared/Showcase";
import { VolunteeringWays } from "@/components/VolunteeringWays";
import React from "react";

const page = () => {
	return (
		<div>
			<Showcase>
				<h1 className="text-5xl lg:text-7xl font-bold">
					We're better{" "}
					<span className="italic text-secondary">together</span>{" "}
				</h1>
				<p className="text-base my-6 leading-relaxed">
					Volunteers are the heart of our mission. Whether you're a
					student, professional, retiree, or simply someone who wants
					to make a difference — there’s a place for you at Imole
					Network Foundation.
				</p>
			</Showcase>
			<VolunteeringWays />
			<VolunteerForm />
			<OurVolunteers
				title={
					<>
						Meet other{" "}
						<span className="text-secondary">Volunteers</span>
					</>
				}
			/>
		</div>
	);
};

export default page;
