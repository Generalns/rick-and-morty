import Link from "next/link";
import { GiMaterialsScience } from "react-icons/gi";

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
				<div className="flex justify-center items-center cursor-pointer">
					<GiMaterialsScience className="text-5xl " />
					<p className="text-2xl hidden sm:block ml-4">Rick & Morty</p>
				</div>
			</Link>
			<div className="w-10/12 sm:w-1/2 xl:w-[85%] flex justify-evenly items-center">
				<Link className="" href={"/locations"}>
					<p className="text-2xl hover:underline hover:underline-offset-8 cursor-pointer ">
						Locations
					</p>
				</Link>
				<Link href={"/residents"}>
					<p className="hover:underline text-2xl hover:underline-offset-8 cursor-pointer">
						Residents
					</p>
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
