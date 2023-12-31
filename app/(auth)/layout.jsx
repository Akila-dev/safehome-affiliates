import Logo from "../../assets/images/logo.svg";
import LogoAlt from "../../assets/images/logo_alt1.svg";
import Image from "next/image";
import Zigzag from "../../assets/images/zigzag.png";
import Zigzag2 from "../../assets/images/zigzag2.png";
import UnionImage from "../../assets/images/union.png";
import Ellipse from "../../assets/images/ellipse.png";
import Polygon from "../../assets/images/polygon.png";
import Pattern from "../../assets/images/pattern.png";

export default function Layout({ children }) {
	return (
		<main className="relative bg-white  sm:bg-gradient-to-b from-[#8D4000]  to-[#1E0700] flex flex-col justify-center items-center  w-full min-h-screen">
			<Image
				src={Pattern}
				alt="pattern"
				className="opacity-10 hidden sm:block"
				layout="fill"
			/>

			<Image
				src={Zigzag}
				alt="zigzag"
				priority
				className="top-0 w-20 lg:w-32 hidden sm:block  absolute right-0"
			/>
			<Image
				src={Zigzag2}
				alt="zigzag"
				priority
				className="top-0 w-20 lg:w-32 hidden sm:block  absolute right-0"
			/>
			<Image
				src={UnionImage}
				alt="union"
				priority
				className="w-24 lg:w-32 absolute hidden sm:block bottom-0 right-0"
			/>
			<Image
				src={Ellipse}
				alt="ellipse"
				priority
				className="top-0 w-24 lg:w-48 hidden sm:block  absolute left-0"
			/>

			<Image
				src={Polygon}
				priority
				alt="polygon"
				className="bottom-0 w-24 lg:w-32 hidden sm:block  absolute left-0"
			/>

			{/* Children goes here  */}

			<div className="  z-10 w-full max-w-2xl space-y-6 ">
				<div className="flex flex-col justify-center items-center">
					<Image priority src={Logo} alt="logo" className="hidden sm:block" />
					<Image priority src={LogoAlt} alt="logo" className="sm:hidden" />
				</div>

				<div className="w-full  flex flex-col justify-start  items-center">
					{children}
				</div>
			</div>
		</main>
	);
}
