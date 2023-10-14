import React from "react";

const Receipt = ({ btnFunc }) => {
	return (
		<div className="px-4 md:px-7 space-y-3 pb-6 md:pb-12">
			<div className="space-y-2 md:space-y-3">
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Date</p>
					<p className="max-w-[60%] truncate">18 June 2023, 12:56:39</p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Ammount</p>
					<p className="max-w-[60%] truncate">₦20,000.00</p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">
						Balance after transaction
					</p>
					<p className="max-w-[60%] truncate">₦480,000.00</p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Account Name</p>
					<p className="max-w-[60%] truncate">Akinlewu </p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Session ID</p>
					<p className="max-w-[60%] truncate">090110230618125643785557 </p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Status</p>
					<p className="text-[--green] font-semibold">Completed </p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Account Number</p>
					<p className="max-w-[60%] truncate">2008400000 </p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">PAyment Reference</p>
					<p className="max-w-[60%] truncate">NYELCQDSNRN </p>
				</div>
				<div className="border-b border-[--lines] py-3 md:py-4 flex justify-between items-center gap-5 px-1">
					<p className="text-[--placeholder] font-light">Fee</p>
					<p className="max-w-[60%] truncate">₦35 </p>
				</div>
			</div>
			<div className="py-8">
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

export default Receipt;
