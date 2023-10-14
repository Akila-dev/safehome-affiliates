import SignIn from "../../components/forms/SignIn.jsx";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<div className="bg-white w-[448px] max-w-[95%] sm:max-w-[80%] lg:max-w-sm min-h-[300px] rounded-brand  border-0 relative py-8 px-4 sm:p-8 ">
				<SignIn />
			</div>

			<div className="mt-8 space-y-2 lg:space-y-4">
				<Link href="/password/reset">
					<p className="text-center  lg:no-underline hover:underline cursor-pointer text-sm text-[--text-brand-2] sm:text-white ">
						Forgot password?
					</p>
				</Link>
			</div>
		</>
	);
}
