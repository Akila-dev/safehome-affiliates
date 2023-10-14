"use client";

import LogoBrand from "../../../assets/images/logo_alt1.svg";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut, BiX } from "react-icons/bi";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Overlay from "../Overlay";
import { HomeSVG, ReferralSVG, TransactionSVG } from "../svg";

const items = [
	{
		name: "Home",
		icon: HomeSVG,
		link: "/",
	},
	{
		name: "Referral History",
		icon: ReferralSVG,
		link: "/referrals",
	},
	{
		name: "Transaction History",
		icon: TransactionSVG,
		link: "/transactions",
	},
];

function Sidebar() {
	const currentPathname = usePathname() || "";

	const routeIsActive = (route) =>
		((currentPathname.includes(route) || currentPathname.startsWith(route)) &&
			route.length > 1) ||
		currentPathname === route;

	return (
		<div className="flex relative flex-col justify-start border-r  border-[--lines] items-center  border-b-[5vh] border-b-[--button] w-full z-20 pt-[48px] pb-8 space-y-16 shadow h-full">
			<a target="_blank" href="/">
				<div className="hover:cursor-pointer">
					<Image priority src={LogoBrand} alt="logo" width="100" />
				</div>
			</a>

			<ul className="space-y-3 flex flex-col justify-start items-start  w-full px-4">
				{items.map((item, index) => {
					const Icon = item.icon;
					return (
						<div className="w-full" key={index}>
							<li>
								<Link href={item.link} as={item.link}>
									<div
										className={
											"flex flex-row justify-start items-center py-3 px-4 rounded-[8px] border border-white/0 group space-x-4 transitioning" +
											cn({
												" hover:bg-[--b1] hover:border-[--lines] cursor-pointer ": !routeIsActive(
													item.link
												),
												" bg-[--button] cursor-default ": routeIsActive(
													item.link
												),
											})
										}
									>
										<div className="w-full max-w-[20px]">
											<div className="text-xl">
												<Icon
													fill={cn({
														"#FFFFFF": routeIsActive(item.link),
														"#1e0700": !routeIsActive(item.link),
													})}
												/>
											</div>
										</div>

										<div className="text-[--text-primary] text-sm font-medium">
											<span
												className={
													"transitioning  text-base " +
													cn({
														" text-white ": routeIsActive(item.link),
														" text-[--text] ": !routeIsActive(item.link),
													})
												}
											>
												{item.name}
											</span>
										</div>
									</div>
								</Link>
							</li>
						</div>
					);
				})}
			</ul>

			<Link href="/sign-out" as="/sign-out">
				<div className="absolute left-0  px-6 py-2 bottom-[5vh] flex flex-row space-x-4 justify-start items-center hover:cursor-pointer">
					<BiLogOut className="text-2xl text-[--text-danger]" />
					<span className="text-[--text-danger] font-medium"> Log Out </span>
				</div>
			</Link>
		</div>
	);
}

export default Sidebar;
