"use client";

import { useState } from "react";

import { PiCaretUpBold, PiCaretDownBold } from "react-icons/pi";

const dropdownData = [{ text: "My Funds" }, { text: "Savings Balance" }];

const Withdraw = ({ btnFunc }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [dropdownInputText, setDropdownInputText] = useState(
		dropdownData[0].text
	);

	const changeInputData = (data) => {
		setDropdownInputText(data);
		setShowDropdown(false);
	};

	return (
		<div className="px-4 md:px-7 flex flex-col gap-7 md:justify-between w-full h-full">
			<form className="grid grid-cols-1 gap-5 md:gap-x-5 md:gap-y-7">
				<div>
					<p className="account-form-text">Ammount to withdraw</p>
					<input
						type="text"
						placeholder="XXXXXXXXXXXX"
						className="account-form-input"
					/>
				</div>
				<div className="relative">
					<p className="account-form-text">Destination of Funds</p>
					<div className="account-form-icon-container">
						<input
							type="button"
							placeholder="Individual"
							value={dropdownInputText}
							onClick={() => setShowDropdown((prev) => (prev = !prev))}
							className="text-left cursor-pointer"
						/>
						<button
							type="button"
							onClick={() => setShowDropdown((prev) => (prev = !prev))}
						>
							{showDropdown ? (
								<PiCaretUpBold className="w-full h-full text-[--text-secondary]" />
							) : (
								<PiCaretDownBold className="w-full h-full text-[--text-secondary]" />
							)}
						</button>
					</div>
					{/* dropdown */}
					{showDropdown && (
						<div className="absolute left-0 top-[100%] w-full pt-3 h-auto">
							<div className="bg-white w-full border border-[--lines] rounded">
								{dropdownData.map((data, index) => (
									<button
										key={index}
										className="block w-full text-left px-5 py-4 hover:bg-[--color-brand] hover:text-white"
										type="button"
										onClick={() => {
											changeInputData(data.text);
										}}
									>
										{data.text}
									</button>
								))}
							</div>
						</div>
					)}
				</div>
			</form>

			<div className="py-9">
				<button
					className="w-full text-white bg-[--button] py-3 px-5 shadow rounded"
					onClick={() => btnFunc()}
				>
					Withdraw
				</button>
			</div>
		</div>
	);
};

export default Withdraw;
