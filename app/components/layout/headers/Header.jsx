"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BellImage from "../../../../assets/images/icons/bell.svg";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { FaRegCalendar, FaCrown } from "react-icons/fa";
import { useUiStore } from "../../../utils/store";
import NotificationBell from "../../NotificationBell";

function Header({ user }) {
	const toggleNotifications = useUiStore((state) => state.toggleNotifications);

	return (
		<header className="w-full">
			<div className="w-full flex flex-row justify-between items-center">
				<div className="flex flex-row justify-start gap-3">
					<BiMenuAltLeft className="text-[--text-brand] self-center text-4xl hidden" />
					<div className="self-center">
						<Image
							src="https://i.pravatar.cc/150?u=helios@g.com"
							width="52"
							height="52"
							alt="Avatar"
							className="rounded-full object-contain "
						/>
					</div>
					<div className="w-auto">
						<h1
							className={
								"self-center text-[--text] capitalize text-2xl md:text-3xl lg:text-4xl  font-semibold "
							}
						>
							Olawale
						</h1>
						<div className="w-auto">
							<Link
								href="/referral_level"
								className="flex items-center gap-1 font-medium w-[85px] gray shadow rounded-[1rem] px-[5px] py-[3px]"
							>
								<FaCrown
									className={`p-[0.25rem] text-[1.2rem] md:text-xl rounded-full text-[#1e0700aa] ${user.level.toLowerCase()}`}
								/>
								<span className="capitalize text-[0.82rem] md:text-sm">
									{user.level}
								</span>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center  gap-4 md:gap-8">
					<NotificationBell toggleNotifications={toggleNotifications} />

					{/* <div className="self-center">
						<Image
							src="https://i.pravatar.cc/150?u=helios@g.com"
							width="52"
							height="52"
							alt="Avatar"
							className="rounded-full object-contain "
						/>
					</div> */}
				</div>
			</div>
		</header>
	);
}

export default Header;
