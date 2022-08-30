import Link from "next/link";
import { GiMaterialsScience } from "react-icons/gi";

import PlaySound from "./PlaySound";
const Navbar = ({ variant }) => {
	return (
		<nav
			className="flex w-full fixed top-0 z-20 justify-evenly items-center shadow-lg py-4 bg-transparent text-white"
			style={
				variant == "transparent"
					? { background: "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))" }
					: { background: "white", color: "black" }
			}
		>
			<Link href="/">
				<div className="flex justify-center items-center cursor-pointer ml-8">
					<GiMaterialsScience className="text-3xl sm:text-5xl " />
					<p className="text-2xl hidden sm:block ml-4">Rick & Morty</p>
				</div>
			</Link>
			<div className="w-10/12 sm:w-1/2 xl:w-[80%] flex justify-evenly items-center">
				<Link className="" href={"/locations"}>
					<p className="sm:text-2xl hover:underline hover:underline-offset-8 cursor-pointer ">
						Locations
					</p>
				</Link>
				<Link href={"/residents"}>
					<p className="hover:underline sm:text-2xl hover:underline-offset-8 cursor-pointer">
						Residents
					</p>
				</Link>
			</div>
			<div className="mr-8">
				<PlaySound />
			</div>
		</nav>
	);
};
export default Navbar;
