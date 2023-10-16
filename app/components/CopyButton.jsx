"use client";
import { useState } from "react";

import { BiSolidCopy } from "react-icons/bi";
import { BsFillClipboardCheckFill } from "react-icons/bs";

const CopyButton = ({ link, type, additionalClasses }) => {
	const [showCopied, setShowCopied] = useState(false);

	const copy = (data) => {
		navigator.clipboard.writeText(data) || window.clipboardData.setData(data);
		setShowCopied(true);
		setTimeout(() => {
			setShowCopied(false);
		}, 1000);
	};
	return (
		<div className={`${additionalClasses} w-auto`}>
			<button
				className="rounded-[1.3rem] bg-[--lines] pl-3 lg:pl-7 xl:space-x-7 flex items-center justify-between max-w-full lg:w-full font-semibold gap-3 md:gap-5"
				onClick={() => copy(link)}
			>
				<p
					className={`font-light truncate w-full ${
						type === "link" ? "text-[0.75rem] md:text-sm" : "text-sm"
					}`}
				>
					{link}
				</p>{" "}
				<p className="capitalize bg-white px-3 lg:px-5 py-2 rounded-l-[1.3rem] rounded-r-[1.3rem] flex justify-center items-center text-sm lg:text-normal min-w-[120px] lg:min-w-[150px]">
					<BiSolidCopy className="block mr-1 lg:mr-2" />{" "}
					<span className="block">Copy {type}</span>
				</p>
			</button>
			{showCopied && (
				<div className="fixed left-0 bottom-0 pb-8 px-5 w-full flex justify-center z-[1000] ">
					<p className="bg-white shadow py-3 px-5 text-center w-full max-w-[400px] rounded-lg z-[100] text-lg font-medium flex items-center justify-center gap-3 border border-[--green]">
						<BsFillClipboardCheckFill className="inline-block text-xl text-[--green]" />{" "}
						Copied {type} to Clipboard
					</p>
				</div>
			)}
		</div>
	);
};

export default CopyButton;
