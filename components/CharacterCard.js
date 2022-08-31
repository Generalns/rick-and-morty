import Image from "next/image";
const CharacterCard = ({ character }) => {
	const { name, species, type, gender, origin, status, image } = character;
	return (
		<div className="rounded-xl shadow-lg border-blue-200 bg-white overflow-hidden">
			<div className="w-full relative h-80 sm:h-96">
				<Image alt="resident" src={image} layout="fill" objectFit="cover" />
			</div>
			<div className="my-4 flex justify-between px-8 text-black">
				<div className="w-full">
					<div className="flex justify-center items-center my-4">
						<p className="text-xl font-bold text-center">{name ? name : "-"}</p>
					</div>
					<div className="flex justify-between items-center my-1">
						<p className="text-lg font-bold">Type:</p>
						<p className="text-lg  text-end">{type ? type : "-"}</p>
					</div>
					<div className="flex justify-between items-center my-1">
						<p className="text-lg font-bold">Species:</p>
						<p className="text-lg  text-end">{species ? species : "-"}</p>
					</div>
					<div className="flex justify-between items-center my-1">
						<p className="text-lg font-bold">Gender:</p>
						<p className="text-lg  text-end">{gender ? gender : "-"}</p>
					</div>
					<div className="flex justify-between items-center my-1">
						<p className="text-lg font-bold">Origin:</p>
						<p className="text-lg  text-end">
							{origin?.name ? origin.name : "-"}
						</p>
					</div>
					<div className="flex justify-between items-center my-1">
						<p className="text-lg font-bold">Status:</p>
						<div className="flex justify-end items-center">
							<div
								className={`rounded-full w-4 h-4 mr-2 ${
									status === "Alive"
										? "bg-lime-500"
										: status === "unknown"
										? "bg-yellow-400"
										: "bg-red-600"
								}`}
							></div>
							<p className="text-lg  text-end">
								{status?.charAt(0).toUpperCase() + status?.slice(1)}{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CharacterCard;
