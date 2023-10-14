import Sidebar from "../components/layout/Sidebar";

import BottomStickyNav from "../components/layout/stickynavs/BottomStickyNav";

export default function Layout({ children }) {
	return (
		<main className=" min-h-screen bg-white w-full md:pl-[225px] xl:pl-[260px]">
			<aside className="bg-white hidden fixed z-20 left-0 inset-y-0 w-[227px] md:flex md:w-[225px] xl:w-[260px] self-stretch  ">
				<Sidebar />
			</aside>

			<BottomStickyNav />

			<section className="w-full min-h-screen pt-[24px] lg:pt-[40px] px-4 lg:px-[48px] bg-white  md:bg-[--b1] ">
				<div className="">{children}</div>
			</section>
		</main>
	);
}
