import Layout from "../components/Layout";
import CharacterCard from "../components/CharacterCard";
const Residents = ({ fetchedResidents, location }) => {
	console.log(fetchedResidents);
	fetchedResidents?.info
		? (fetchedResidents = fetchedResidents.results)
		: fetchedResidents;
	return (
		<Layout>
			<div className="w-full flex flex-col justify-center items-center my-20 sm:my-32 bg-white">
				<p className="text-4xl font-bold text-center mb-8">
					{location ? location.toUpperCase() : ""}
				</p>
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container">
					{fetchedResidents.length > 1 ? (
						fetchedResidents.map((resident, index) => {
							return <CharacterCard key={index} character={resident} />;
						})
					) : fetchedResidents != -1 ? (
						<CharacterCard character={fetchedResidents} />
					) : (
						<p className="text-xl w-screen">
							There are no known residents at this location...
						</p>
					)}
				</div>
			</div>
		</Layout>
	);
};
export async function getServerSideProps(context) {
	const residents = context.query.residents;
	const location = context.query.location ? context.query.location : "";
	let res;
	if (Object.keys(context.query).length === 0) {
		console.log("sa");
		res = await fetch(`https://rickandmortyapi.com/api/character`);
	} else {
		res = await fetch(`https://rickandmortyapi.com/api/character/${residents}`);
	}
	let fetchedResidents = await res.json();
	if (!residents && Object.keys(context.query).length !== 0) {
		fetchedResidents = -1;
	}
	return {
		props: {
			fetchedResidents,
			location,
		},
	};
}
export default Residents;
