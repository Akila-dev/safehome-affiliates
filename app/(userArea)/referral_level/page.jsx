"use client";

// import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCalendar, FaCrown } from "react-icons/fa";
import ReferralDetails from "../../components/home/ReferralDetails";
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
};

const Page = () => {
	return (
		<div className="space-y-5  md:space-y-8 w-full min-h-screen pb-16">
			<Header user={authenticatedUser} />

			<main className=" space-y-10 md:space-y-5 lg:space-y-10">
				<section className="bg-white rounded-brand  md:p-8 space-y-4">
					<div className="flex flex-row justify-between items-center">
						<div className="flex justify-start items-center space-x-10 md:space-x-16 md:pb-1">
							<h1 className="text-[--color-brand] capitalize text-xl sm:text-2xl lg:text-2xl  font-medium">
								Your Referral Level
							</h1>
							<p className="flex items-center gap-2 text-xl font-medium">
								<FaCrown className="bg-[--bronze] p-[0.4rem] text-3xl rounded-full text-[#1e0700aa]" />
								<span>Bronze</span>
							</p>
						</div>
					</div>
					...
					<p>
						The numbers: <b className="text-[--color-brand">10, 100 and 250</b>{" "}
						represent your number of referrals.
					</p>
				</section>

				<ReferralDetails />
			</main>
		</div>
	);
};

export default Page;
