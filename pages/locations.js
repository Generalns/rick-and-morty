import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setLocations } from "../redux/actions/locations";
import Layout from "../components/Layout";
import LocationsTable from "../components/LocationsTable";
import ReactPaginate from "react-paginate";
import Router, { useRouter } from "next/router";
function Locations(props) {
	const [loading, setLoading] = useState(false);
	const startLoading = () => setLoading(true);
	const stopLoading = () => setLoading(false);
	const { fetchedLocations, locations, setLocations } = props;
	const router = useRouter();
	useEffect(() => {
		// Router event handler
		Router.events.on("routeChangeStart", startLoading);
		Router.events.on("routeChangeComplete", stopLoading);
		return () => {
			Router.events.off("routeChangeStart", startLoading);
			Router.events.off("routeChangeComplete", stopLoading);
		};
	}, []);
	useEffect(() => {
		setLocations(fetchedLocations.results);
	}, [fetchedLocations]);
	const handlePagination = page => {
		const path = router.pathname;
		const query = router.query;
		query.page = page.selected + 1;
		router.push({
			pathname: path,
			query: query,
		});
	};
	return (
		<Layout>
			<div className="w-full flex justify-center items-center">
				<div className="my-32 w-full md:container">
					<p className="text-center text-3xl mb-8">LOCATIONS</p>
					{loading ? (
						<h1>Loading..</h1>
					) : (
						<LocationsTable locations={locations} />
					)}

					<div className="flex justify-center items-center mt-8">
						<ReactPaginate
							marginPagesDisplayed={4}
							pageRangeDisplayed={5}
							previousLabel={"Previous"}
							nextLabel={"Next"}
							breakLabel={"..."}
							initialPage={0}
							pageCount={7}
							onPageChange={handlePagination}
							containerClassName={"flex items-center justify-center"}
							subContainerClassName={"flex"}
							pageClassName={"paginate-li"}
							pageLinkClassName={"mx-2"}
							activeClassName={"text-blue-600 text-xl font-bold"}
							nextLinkClassName={
								"mx-4 px-4 py-2 rounded-lg text-white bg-black hidden sm:block"
							}
							previousLinkClassName={
								"mx-4 px-4 py-2 rounded-lg text-white bg-black hidden sm:block"
							}
							breakLinkClassName={"paginate-break"}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}

const mapStateToProps = state => {
	return { locations: state.locations.locations };
};

const mapDispatchToProps = {
	setLocations,
};

export const getServerSideProps = async ({ query }) => {
	const page = query.page || 1;
	const res = await fetch(
		`https://rickandmortyapi.com/api/location?page=${page}`
	);
	const fetchedLocations = await res.json();
	console.log(fetchedLocations);
	return {
		props: { fetchedLocations }, // will be passed to the page component as props
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Locations);
