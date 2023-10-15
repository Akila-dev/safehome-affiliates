"use client";

import { useState, useRef, useEffect } from "react";
import { FaMoneyBill, FaPercentage } from "react-icons/fa";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import Image from "next/image";
import FundsImage from "../../../assets/images/icons/Funds.svg";
import Savingsmage from "../../../assets/images/icons/SavingsLite.svg";
import TrendsImage from "../../../assets/images/icons/Trends.svg";
import LoanImage from "../../../assets/images/icons/loan.svg";
import ScrollLink from "../ScrollLink";

function ReferralDetails() {
	return (
		<section className="bg-white rounded-brand  md:p-8 space-y-4 lg:space-y-8">
			<div className="flex flex-row justify-between items-center">
				<div className="block w-full">
					<div className="">
						<h1 className="text-[--color-brand] capitalize text-xl sm:text-2xl lg:text-2xl  font-medium">
							Referral Levels
						</h1>
					</div>
				</div>
			</div>

			<div className="space-y-5">
				<div>
					<p>You need to have up to 10 referrals to be in this level.</p>
				</div>
				<div className="space-y-7">
					<h2 className="text-[1.15rem] md:text-[1.35rem] font-semibold underline underline-offset-[5px]">
						Exclusive Benefits
					</h2>
					<div>
						<div>
							<p className="flex items-center justify-center bg-[--b1] rounded-lg w-[100px] h-[100px] shadow-sm">
								<FaPercentage className="text-2xl" />
							</p>
							<p className="font-semibold pt-4">40% (₦2,000)</p>
							<p className="capitalize">referral fee</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ReferralDetails;
