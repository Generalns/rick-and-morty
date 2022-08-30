import Navbar from "./Navbar";
const Layout = ({ children, navbarVariant }) => {
	return (
		<>
			<Navbar variant={navbarVariant} />
			{children}
		</>
	);
};
export default Layout;
