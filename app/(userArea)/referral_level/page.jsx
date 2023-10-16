"use client";

// import { useState } from "react";
import Image from "next/image";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegCalendar, FaCrown } from "react-icons/fa";
import ReferralDetails from "../../components/home/ReferralDetails";
import LastNTime from "../../components/home/LastNTime";
import HeaderAlt from "../../components/layout/headers/HeaderAlt";
import TransactionHistoryTable from "../../components/home/TransactionHistoryTable";
import ReferralHistory from "../../components/home/ReferralHistory";
import CopyButton from "../../components/CopyButton";
import ReferralLevelDisplay from "../../components/referral_levels/ReferralLevelDisplay";

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

const referralLevelsData = [
	{
		title: "bronze",
		requiredReferrals: 10,
		benefits: [
			{ title: "referral fee", value: "40% (₦2,000)" },
			{ title: "referral bonus", value: "₦20,000" },
			{ title: "level bonus", value: "₦20,000" },
			{ title: "accumulated bonus", value: "₦0" },
			{ title: "total level earnings", value: "₦40,000" },
		],
	},
	{
		title: "silver",
		requiredReferrals: 100,
		benefits: [
			{ title: "referral fee", value: "40% (₦2,000)" },
			{ title: "referral bonus", value: "₦200,000" },
			{ title: "level bonus", value: "₦100,000" },
			{ title: "accumulated bonus", value: "₦20,000" },
			{ title: "total level earnings", value: "₦320,000" },
		],
	},
	{
		title: "gold",
		requiredReferrals: 250,
		benefits: [
			{ title: "referral fee", value: "40% (₦2,000)" },
			{ title: "referral bonus", value: "₦500,000" },
			{ title: "level bonus", value: "₦250,000" },
			{ title: "accumulated bonus", value: "₦120,000" },
			{ title: "total level earnings", value: "₦870,000" },
		],
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
			{/* <HeaderAlt user={authenticatedUser} /> */}

			<main className="pb-7 md:pb-0 space-y-8 md:space-y-5 lg:space-y-10">
				<section className="space-y-7 md:space-y-10">
					<div className="bg-white rounded-brand  md:p-8 space-y-4">
						<div className="flex flex-row justify-between items-center">
							<div className="flex flex-row justify-start gap-3">
								<div className="self-center">
									<Image
										src="https://i.pravatar.cc/150?u=helios@g.com"
										width="52"
										height="52"
										alt="Avatar"
										className="rounded-full object-contain "
									/>
								</div>
								<div className="">
									<h1 className="self-center text-[--text] capitalize text-2xl md:text-3xl lg:text-4xl  font-semibold ">
										Olawale
									</h1>
									<p
										href="/referral_level"
										className="flex items-center gap-1 font-medium"
									>
										<FaCrown
											className={`p-[0.25rem] text-xl rounded-full text-[#1e0700aa] ${authenticatedUser.level.toLowerCase()}`}
										/>
										<span className="capitalize">
											{authenticatedUser.level}
										</span>
									</p>
								</div>
							</div>
						</div>
						<ReferralLevelDisplay lvl={authenticatedUser.level} />
						<p>
							The numbers:{" "}
							<b className="text-[--color-brand">10, 100 and 250</b> represent
							your number of referrals.
						</p>
					</div>
				</section>

				<section className="space-y-5 md:space-y-7">
					{/* <h1 className="text-[--color-bran] capitalize text-2xl sm:text-3xl lg:text-3xl  font-semibold">
						Referral Levels
					</h1> */}
					<div className="space-y-6 md:space-y-7">
						{referralLevelsData.map((item, i) => (
							<ReferralDetails
								key={i}
								level={item.title}
								requiredReferrals={item.requiredReferrals}
								benefits={item.benefits}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Page;
