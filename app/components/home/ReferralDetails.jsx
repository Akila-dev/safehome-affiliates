"use client";

import { FaPercentage, FaCrown } from "react-icons/fa";

import Image from "next/image";
import FundsImage from "../../../assets/images/icons/Funds.svg";
import Savingsmage from "../../../assets/images/icons/SavingsLite.svg";
import TrendsImage from "../../../assets/images/icons/Trends.svg";
import LoanImage from "../../../assets/images/icons/loan.svg";
import ScrollLink from "../ScrollLink";

const BenefitCard = ({ title, value }) => (
	<div className="w-[120px]">
		<p className="flex items-center justify-center bg-[--b1] rounded-lg w-[120px] h-[100px] shadow-sm">
			<FaPercentage className="text-2xl" />
		</p>
		<p className="font-semibold pt-4">{value}</p>
		<p className="capitalize text-sm">{title}</p>
	</div>
);

function ReferralDetails({ level, requiredReferrals, benefits }) {
	return (
		<section className="bg-white rounded-brand  md:p-8 space-y-4 lg:space-y-8">
			<div className="space-y-5">
				<p className="flex items-center gap-2 text-xl font-medium capitalize">
					<FaCrown
						className={`p-[0.4rem] text-3xl rounded-full text-[#1e0700cc] ${level.toLowerCase()}`}
					/>
					<span className="capitalize">{level}</span>
				</p>
				<div>
					<p>
						You need to have up to {requiredReferrals} referrals to be in this
						level.
					</p>
				</div>
				<div className="space-y-7">
					<h2 className="text-[1.15rem] md:text-[1.35rem] font-semibold underline underline-offset-[5px]">
						Exclusive Benefits
					</h2>
					<div className="flex gap-5 md:gap-7 flex-wrap">
						{benefits.map((benefit, i) => (
							<BenefitCard
								key={i}
								title={benefit.title}
								value={benefit.value}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReferralDetails;
