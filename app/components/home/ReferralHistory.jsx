"use client";
import { useState } from "react";
import Image from "next/image";
import moment from "moment";

import { BsFilterRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import notFoundImg from "../../../assets/images/notFoundImg.png";

function ReferralHistory({ data }) {
	return (
		<div>
			<div className="flex justify-between gap-3 md:gap-5 items-center">
				<h1 className="text-[--color-brand] capitalize text-xl sm:text-2xl lg:text-2xl  font-medium">
					Referral History
				</h1>
				<div className="flex gap-2 md:gap-3">
					<div className="w-full max-w-[300px] bg-[--b1] rounded-lg lg:rounded-[1.1rem] flex gap-3 px-3 lg:px-6 items-center py-2 lg:py-0">
						<FiSearch className="text-xl" />
						<input
							type="text"
							placeholder="First Name"
							className="hidden lg:block py-2 w-full rounded outline-none placeholder:text-[--placeholder] font-normal bg-transparent"
						/>
					</div>

					<button className="lg:bg-[--b1] border border-[--button] lg:border-0 rounded-lg lg:rounded-[1.1rem] flex gap-3 px-2 lg:px-6 items-center py-2 lg:py-0">
						<BsFilterRight className="text-xl" />
						<span className="hidden lg:block">Filter</span>
					</button>
				</div>
			</div>

			{data.length < 1 ? (
				<div className="w-full flex flex-col items-center gap-8 pt-8 pb-4">
					<p className="max-w-[300px] text-center text-[--color-brand">
						You have not made any referral yet. Share your code to earn rewards
					</p>
					<div className="max-w-[250px]">
						<Image
							src={notFoundImg}
							width="auto"
							height="auto"
							alt="not found"
							className="w-full h-auto"
						/>
					</div>
				</div>
			) : (
				<div className="pt-5 md:pt-8">
					<table className="w-full table text-[--text-secondary] font-normal ">
						<thead className="w-full">
							<tr className="w-full bg-[--b1] hidden md:table-row">
								<th className=" text-center whitespace-nowrap  py-5 pl-3">
									{" "}
									S/N{" "}
								</th>
								<th className=" text-left px-6 whitespace-nowrap  py-5 ">
									Date
								</th>
								<th className=" text-left px-6 whitespace-nowrap  py-5 ">
									Referral Name
								</th>
							</tr>
						</thead>

						<tbody>
							{data.map((item, i) => (
								<tr
									key={i}
									className={`table-row text-left text-sm ${
										i % 2 !== 0 && "md:py-5  md:bg-[--b1]"
									}  ${
										i % 2 === 0 && "py-5 md:py-0 bg-[--b1] md:bg-transparent"
									}`}
								>
									<td className="py-4 text-center pl-3">{i + 1}</td>
									<td className="text-left px-6">
										<span className="block md:hidden">
											{moment(item.date).format("DD/MM/YYYY")}
										</span>
										<span className="hidden md:block">
											{moment(item.date).format(" MMMM Do, YYYY")}
										</span>
									</td>
									<td className="text-left px-6">{item.name}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

export default ReferralHistory;
