import React from "react";
import { FaCrown } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

const ReferralLevelDisplay = ({ lvl }) => {
	const levels = ["bronze", "silver", "gold"];
	const req = [10, 100, 250];
	const level = levels.indexOf(lvl.toLowerCase());
	return (
		<div className="relative py-3 h-[100px] w-full max-w-[700px] overflow-y-hidden">
			<div className="flex items-center justify-between h-full w-full px-4">
				{Array(levels.length - 1)
					.fill()
					.map((_, i) => (
						<div
							key={i}
							className={`h-[4px] w-full rounded-lg ${
								level <= i ? "bg-[--primary]" : "bg-[--color-brand]"
							}`}
						></div>
					))}
			</div>
			<div className="flex items-center justify-between absolute top-0 left-0 h-full w-full">
				{levels.map((lv, i) => (
					<div key={i} className="flex flex-col gap-1 items-center">
						<p
							className={`capitalize font-semibold ${
								level + 1 <= i ? "text-[--primary]" : "text-[--color-brand]"
							}`}
						>
							{req[i]}
						</p>
						<div>
							{level + 1 <= i ? (
								<FaCrown
									className={`p-[0.35rem] shadow text-3xl rounded-full text-[#1e0700aa] ${levels[i]}`}
								/>
							) : (
								<BsPatchCheckFill className="text-[--color-brand] bg-white rounded-full text-3xl" />
							)}
						</div>
						<p
							className={`capitalize font-semibold ${
								level + 1 <= i ? "text-[--primary]" : "text-[--color-brand]"
							}`}
						>
							{levels[i]}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReferralLevelDisplay;
