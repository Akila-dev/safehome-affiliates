"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import BellImage from "../../../../assets/images/icons/bell.svg";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { FaRegCalendar, FaCrown } from "react-icons/fa";
import { useUiStore } from "../../../utils/store";
import NotificationBell from "../../NotificationBell";

function Header({ user, extraClasses, title }) {
	const toggleNotifications = useUiStore((state) => state.toggleNotifications);

	return (
		<header className="w-full">
			<div className="w-full flex flex-row justify-between items-center">
				<div className="flex flex-row justify-start gap-3">
					<div className="">
						<h1
							className={
								"self-center text-[--text] capitalize text-2xl md:text-3xl lg:text-4xl  font-semibold " +
								extraClasses
							}
						>
							My Referral Level
						</h1>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center  gap-4 md:gap-8">
					<NotificationBell toggleNotifications={toggleNotifications} />
				</div>
			</div>
		</header>
	);
}

export default Header;
