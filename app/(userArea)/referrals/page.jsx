"use client";

// import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import OverviewCard from "../../components/home/OverviewCard";
import LastNTime from "../../components/home/LastNTime";
import Header from "../../components/layout/headers/Header";
import TransactionHistoryTable from "../../components/home/TransactionHistoryTable";
import ReferralHistory from "../../components/home/ReferralHistory";
import CopyButton from "../../components/CopyButton";

const referralsData = [
	{
		date: "9/6/2023",
		name: "Stephen Jobs",
	},
	{
		date: "9/6/2023",
		name: "John Doe",
	},
	{
		date: "9/6/2023",
		name: "Francis Drake",
	},
];

const authenticatedUser = {
	firstName: "Godspower",
	avatarUrl: "https://i.pravatar.cc/150?u=helios@g.com",
	level: "bronze",
};

const Page = () => {
	return (
		<div className="space-y-5  md:space-y-8 w-full min-h-screen pb-16">
			<Header user={authenticatedUser} title="Referrals" />

			<main className=" space-y-10 md:space-y-5 lg:space-y-10">
				{/* <OverviewCard /> */}

				<section className="bg-white rounded-brand md:p-8 space-y-4">
					<ReferralHistory data={referralsData} />
				</section>
			</main>
		</div>
	);
};

export default Page;
