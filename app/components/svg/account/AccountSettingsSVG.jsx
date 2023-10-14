import React from "react";

function AccountSVG({ fill }) {
	return (
		<svg
			width="16"
			height="20"
			viewBox="0 0 16 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739ZM8 0C10.9391 0 13.294 2.35402 13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0Z"
				fill={fill}
			/>
		</svg>
	);
}

export default AccountSVG;
