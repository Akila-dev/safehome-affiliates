"use client";

import { useState, useRef, useEffect } from "react";
import { FaMoneyBill } from "react-icons/fa";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import Image from "next/image";
import FundsImage from "../../../assets/images/icons/Funds.svg";
import Savingsmage from "../../../assets/images/icons/SavingsLite.svg";
import TrendsImage from "../../../assets/images/icons/Trends.svg";
import LoanImage from "../../../assets/images/icons/loan.svg";
import ScrollLink from "../ScrollLink";

import { Withdraw, Receipt, ReceiptTopBar } from "./popups";
import { PopUpTopBar } from "../../components/home/popups";

function OverviewCard() {
	const [showWithdraw, setShowWithdraw] = useState(false);
	const [showReceipt, setShowReceipt] = useState(false);

	// Hide Popups when not clicked on
	const withdrawRef = useRef(null);
	const receiptRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (withdrawRef.current && !withdrawRef.current.contains(event.target)) {
				setShowWithdraw(false);
			}
			if (receiptRef.current && !receiptRef.current.contains(event.target)) {
				setShowReceipt(false);
				setShowWithdraw(false);
			}
		};
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [showWithdraw, showReceipt]);

	return (
		<section className="bg-white rounded-brand  md:p-8 space-y-4 lg:space-y-8">
			<div className="flex flex-row justify-between items-center">
				{/* <div className=" md:hidden self-center">
					<PiDotsThreeOutlineVertical className="text-xl text-[--placeholder]" />
				</div> */}

				<div className="block w-full">
					<div className="flex justify-end">
						<button
							className="bg-[--button] flex text-white py-3 px-6 rounded-lg items-center gap-2 text-sm md:text-normal"
							onClick={() => setShowWithdraw(true)}
						>
							<FaMoneyBill className="text-white text-xl md:text-2xl" />{" "}
							Withdraw
						</button>
					</div>
				</div>
			</div>

			<div>
				{/* Scroll Indicators  */}

				<div className="md:hidden pb-2 flex flex-row justify-end items-center space-x-1 px-2">
					<ScrollLink
						containerId="scroll-indicators"
						activeClass="inline-block rounded-full  w-[8px] bg-[--primary] p-1 px-[7px]"
						className="inline-block rounded-full bg-[--lines] p-1 "
						to="total-earnings"
					></ScrollLink>

					<ScrollLink
						containerId="scroll-indicators"
						activeClass="inline-block rounded-full  w-[8px] bg-[--primary] p-1 px-[7px]"
						className="inline-block rounded-full bg-[--lines] p-1 "
						to="no-of-referrals"
					></ScrollLink>

					<ScrollLink
						containerId="scroll-indicators"
						activeClass="inline-block rounded-full  w-[8px] bg-[--primary] p-1 px-[7px]"
						className="inline-block rounded-full bg-[--lines] p-1 "
						to="earning-rate"
					></ScrollLink>
				</div>

				{/* Scroll Indicatots end  */}

				<div
					id="scroll-indicators"
					className="flex  flex-row justify-between items-center overflow-x-auto whitespace-nowrap space-x-4 no-scrollbar text-sm lg:text-lg"
				>
					<div
						id="total-earnings"
						className="bg-[#8d4000]/10 w-full min-w-[100%] sm:min-w-[60%] lg:min-w-[344px] rounded-brand p-6 flex flex-col justify-center items-start space-y-8"
					>
						<div>
							<Image src={FundsImage} alt="my funds" width="48" />
						</div>

						<div className="space-y-2 md:space-y-3">
							<h2 className=" text-[--text-secondary]">Total Earned</h2>

							<p className="text-[--text-secondary] font-bold text-3xl lg:text-3xl">
								₦0
							</p>
						</div>
					</div>

					<div
						id="no-of-referrals"
						className="bg-[#ff6100]/10 w-full min-w-[100%] sm:min-w-[60%] lg:min-w-[344px] rounded-brand p-6 flex flex-col justify-center items-start space-y-8 "
					>
						<div>
							<Image src={Savingsmage} alt="my funds" width="48" />
						</div>
						<div className="space-y-2 md:space-y-3">
							<h2 className=" text-[--text-secondary]">
								{" "}
								Number of Referrals{" "}
							</h2>

							<p className="text-[--text-secondary] font-bold text-3xl lg:text-3xl">
								₦0
							</p>
						</div>
					</div>

					<div
						id="earning-rate"
						className="bg-[#ccc]/10 w-full min-w-[100%] sm:min-w-[60%] lg:min-w-[344px] rounded-brand p-6 flex flex-col justify-center items-start space-y-8"
					>
						<div className="space-y-2 md:space-y-3 pb-10 md:pb-7">
							<h2 className=" text-[--text-secondary]">Earn</h2>
							<h2 className=" text-[--text-secondary] font-medium text-3xl lg:text-4xl pt-2">
								40%
							</h2>
							<h2 className=" text-[--text-secondary]">Per Referral</h2>
						</div>
					</div>
				</div>
			</div>

			{/* <div className=" flex flex-row  md:hidden justify-between items-center space-x-4">
				<button
					className="bg-[--button] flex text-white py-3 px-6 rounded-lg items-center gap-2"
					onClick={() => setShowWithdraw(true)}
				>
					<FaMoneyBill className="text-white text-2xl" /> Withdraw
				</button>
			</div> */}

			{/* POPUPS */}
			{showWithdraw && (
				<div className="fixed top-[-20vh] left-0 w-full h-[150vh] bg-black/50 z-[100]">
					<div
						className="fixed top-[0] right-0 w-full md:w-[450px] h-[105vh] pb-[5vh] bg-white overflow-y-auto shadow"
						ref={withdrawRef}
					>
						<div className="fixed top-0 right-0 z-[10] w-full md:w-[450px] bg-transparent pr-1">
							<PopUpTopBar
								close={() => setShowWithdraw(false)}
								title="Withdraw Funds"
								desc="Withdraw funds to your desired destination."
							/>
						</div>
						<div className="pt-[180px] md:pt-[230px] h-full">
							<Withdraw
								btnFunc={() => {
									setShowReceipt(true);
								}}
							/>
						</div>
					</div>
				</div>
			)}

			{showReceipt && (
				<div className="fixed top-[-20vh] left-0 w-full h-[150vh] bg-black/50 z-[100]">
					<div
						className="fixed top-[0] right-0 w-full md:w-[450px] h-[105vh] pb-[5vh] bg-white overflow-y-auto shadow"
						ref={receiptRef}
					>
						<div className="fixed top-0 right-0 z-[10] w-full md:w-[450px] bg-transparent pr-1">
							<ReceiptTopBar
								close={() => setShowReceipt(false)}
								title="Transaction Type"
								desc="Withdrawal"
							/>
						</div>
						<div className="pt-[170px] md:pt-[230px] h-full">
							<Receipt btnFunc={() => console.log("withdraw")} />
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default OverviewCard;
