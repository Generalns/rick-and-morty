import Link from "next/link";
const Button = ({ text, variant, children, link }) => {
	return (
		<Link href={link}>
			<div className="p-4 flex cursor-pointer justify-center items-center rounded text-black bg-white">
				<p className="text:xl sm:text-2xl mr-2">{text}</p>
				{children}
			</div>
		</Link>
	);
};
export default Button;
