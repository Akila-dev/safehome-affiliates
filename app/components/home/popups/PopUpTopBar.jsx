import Image from "next/image";

import closeIcon from "../../../../assets/images/icons/closeIcon.svg";
import { PiArrowLeft } from "react-icons/pi";

const PopUpTopBar = ({ close, title, desc }) => {
	return (
		<div className=" bg-white">
			<div className="px-4 md:px-5 flex justify-start md:justify-end items-center w-full h-[70px] pt-3 md:h-[100px] md:pt-0">
				<button
					className="md:p-[4px] md:border-2 border-[--lines] rounded-full"
					onClick={() => close()}
				>
					<Image
						src={closeIcon}
						alt="close"
						width={24}
						height={24}
						className="object-contain w-[24px] h-[24px] hidden md:block"
					/>
					<PiArrowLeft className="md:hidden text-2xl" />
				</button>
			</div>
			{title && (
				<div className="pb-3 px-4 md:px-7 space-y-2 text-[--text-secondary]">
					<h3 className="text-2xl md:text-3xl text-[--color-brand] font-semibold">
						{title}
					</h3>
					<p>{desc}</p>
				</div>
			)}
		</div>
	);
};

export default PopUpTopBar;
