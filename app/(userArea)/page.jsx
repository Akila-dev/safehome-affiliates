"use client";

// import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import OverviewCard from "../components/home/OverviewCard";
import LastNTime from "../components/home/LastNTime";
import Header from "../components/layout/headers/Header";
import TransactionHistoryTable from "../components/home/TransactionHistoryTable";
import ReferralHistory from "../components/home/ReferralHistory";
import CopyButton from "../components/CopyButton";

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
				<OverviewCard />

				<div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 xl:gap-8 justify-start">
					<CopyButton
						link="https://www.google.com/"
						type="link"
						additionalClasses=""
					/>
					<h3 className="font-bold">OR</h3>
					<CopyButton link="ITEHHOH" type="code" additionalClasses="" />
				</div>

				<section className="bg-white rounded-brand md:p-8 space-y-4">
					<ReferralHistory data={referralsData} />
				</section>

				<section className="bg-white rounded-brand  md:p-8 space-y-4">
					<div className="flex flex-row justify-between items-center">
						<div className="flex justify-start items-center space-x-10 md:space-x-16 md:pb-1">
							<h1 className="text-[--color-brand] capitalize text-xl sm:text-2xl lg:text-2xl  font-medium">
								Transactions
							</h1>
							<LastNTime />
						</div>
					</div>

					<TransactionHistoryTable />
				</section>
			</main>
		</div>
	);
};

export default Page;
