"use client";

// import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import OverviewCard from "../../components/home/OverviewCard";
import LastNTime from "../../components/home/LastNTime";
import TransactionTypeFilter from "../../components/home/TransactionTypeFilter";
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
			<Header user={authenticatedUser} />

			<main className=" space-y-10 md:space-y-5 lg:space-y-10">
				{/* <OverviewCard /> */}

				<section className="bg-white rounded-brand  md:p-8 space-y-4">
					<div className="flex flex-row justify-between items-center">
						<div className="flex flex-col md:flex-row justify-start md:items-center gap-1 md:gap-16 md:pb-1">
							<h1 className="text-[--color-brand] capitalize text-xl sm:text-2xl lg:text-2xl  font-medium">
								Transactions
							</h1>
							<div className="flex gap-5 w-full max-w-[270px]">
								<div>
									<LastNTime />
								</div>
								<div>
									<TransactionTypeFilter />
								</div>
							</div>
						</div>
					</div>

					<TransactionHistoryTable />
				</section>
			</main>
		</div>
	);
};

export default Page;
