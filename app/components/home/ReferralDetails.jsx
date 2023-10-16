"use client";

import { FaPercentage, FaCrown } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { MdAutoGraph } from "react-icons/md";
import { PiHandCoinsFill } from "react-icons/pi";

import Image from "next/image";
import FundsImage from "../../../assets/images/icons/Funds.svg";
import Savingsmage from "../../../assets/images/icons/SavingsLite.svg";
import TrendsImage from "../../../assets/images/icons/Trends.svg";
import LoanImage from "../../../assets/images/icons/loan.svg";
import ScrollLink from "../ScrollLink";

const BenefitCard = ({ title, value, icon }) => (
	<div className="w-full space-y-3">
		<p className="flex flex-col gap-2 items-center justify-center bg-white md:bg-[--b1] rounded-lg w-[120px] h-[100px] shadow-sm">
			{/* <GiCash className="text-4xl" /> */}
			{icon}
			<span className="font-semibold">{value}</span>
		</p>
		{/* <p className="flex items-center justify-center bg-[--b1] rounded-lg w-[120px] h-[100px] shadow-sm">
			{icon}
		</p> */}
		{/* <p className="font-semibold pt-4">{value}</p> */}
		<p className="capitalize text-center whitespace-break-spaces">{title}</p>
	</div>
);

function ReferralDetails({ level, requiredReferrals, benefits }) {
	const Icons = [
		<FaRegHandshake key={1} className="text-4xl" />,
		<PiHandCoinsFill key={2} className="text-4xl" />,
		<MdAutoGraph key={3} className="text-4xl" />,
		<GrMoney key={4} className="text-3xl" />,
		<GiCash key={5} className="text-4xl" />,
	];
	return (
		<section className="gray-sm rounded-brand  px-4 py-5 md:p-8 space-y-4 lg:space-y-8">
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
					<div className="space-y-1">
						<div className="lg:hidden pb-2 flex flex-row justify-end items-center space-x-1 px-2">
							{benefits.map((_, i) => (
								<ScrollLink
									key={i}
									containerId={level + "scroll-indicators"}
									activeClass="inline-block rounded-full  w-[8px] bg-[--primary] p-1 px-[7px]"
									className="inline-block rounded-full bg-[--lines] p-1 "
									to={level + "val" + i}
								></ScrollLink>
							))}
						</div>

						<div
							id={level + "scroll-indicators"}
							className="flex lg:gap-7 lg:flex-wrap overflow-x-auto whitespace-nowrap space-x-4 lg:space-x-0 no-scrollbar"
						>
							{benefits.map((benefit, i) => (
								<div key={i} id={level + "val" + i} className="w-[120px]">
									<BenefitCard
										title={benefit.title}
										value={benefit.value}
										icon={Icons[i]}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReferralDetails;
