import Image from "next/image";
import ArrowDownRed from "../../../assets/images/icons/arrow-down.svg";

function TransactionHistoryTable() {
	return (
		<section>
			{/* For Mobile */}

			<div className=" md:hidden overflow-auto max-h-[482px]">
				{Array(10)
					.fill()
					.map((_, i) => (
						<div
							key={i}
							className="flex flex-col justify-center items-start space-y-2 border-b border-[--lines] py-4"
						>
							<div className="flex flex-row justify-between items-start md:items-center w-full">
								<div className="flex w-full max-w-[50%] flex-row justify-start items-center space-x-2 truncate">
									<div className="">
										<div className="w-[43px] h-[43px] p-1 flex items-center justify-center bg-[#FFE5E5] flex-1 rounded-full border border-transparent">
											<Image
												src={ArrowDownRed}
												alt="arrow down"
												width="25"
												height="25"
												className="object-contain w-[25px] h-[25px]"
											/>
										</div>
									</div>

									<div className="flex  flex-col justify-center items-start space-y-1">
										<span className="text-[--color-brand-2] truncate text-base">
											UYUUGEVUVYVUYTGJ
										</span>
										<span className="text-[--text-danger] text-sm">
											{" "}
											Withdrawal
										</span>
									</div>
								</div>

								<div className="flex px-2 flex-col justify-center items-end space-y-1 text-right">
									<span className="text-[--text-secondary] font-semibold text-base">
										{" "}
										₦1,000,000{" "}
									</span>
									<span className="text-[--placeholder] text-xs">
										10/01/2023 - 09:28AM
									</span>
								</div>
							</div>
						</div>
					))}
			</div>

			{/* For Desktops  */}
			<div className="hidden md:block overflow-auto max-h-[482px]">
				<table className="w-full table text-[--text-secondary] font-normal ">
					<thead className="w-full">
						<tr className="table-row w-full bg-[--b1]">
							<th className=" text-left  whitespace-nowrap pl-3 py-5">
								{" "}
								Date & Time{" "}
							</th>
							<th className=" text-left  px-6 whitespace-nowrap py-5">
								Transaction Type
							</th>
							<th className=" text-left  px-6 whitespace-nowrap py-5">
								Amount
							</th>
							<th className=" text-left  px-6 whitespace-nowrap py-5">
								Reference{" "}
							</th>
						</tr>
					</thead>

					<tbody>
						{Array(10)
							.fill()
							.map((_, i) => (
								<tr
									key={i}
									className={`table-row text-left text-sm ${
										i % 2 !== 0 && "py-5 bg-[--b1]"
									}`}
								>
									<td className="py-4 text-left pl-3">
										10 January 2023, 09:20:58
									</td>
									<td className="text-left px-6"> Withdraw </td>
									<td className="text-left px-6">₦1,000,000</td>
									<td className="text-left px-6">
										{" "}
										UYUUGEVUVYVTYFYU#UGEYF&*YG#YUVEYVYU{" "}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default TransactionHistoryTable;
