import Link from "next/link";
import React from "react";

export default function LocationsTable({ locations }) {
	return (
		<div className="flex flex-col">
			<div className="overflow-x-auto">
				<div className="p-1.5 w-full inline-block align-middle">
					<div className="overflow-scroll md:overflow-hidden border rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
									>
										Name
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
									>
										Type
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
									>
										Dimension
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
									>
										Resident Count
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{locations.length > 0 ? (
									locations.map((location, index) => {
										let query = [];
										location.residents.map(resident => {
											query.push(resident.split("/").reverse()[0]);
										});
										query = query.join(",");
										return (
											<Link
												key={index}
												href={{
													pathname: "/residents",
													query: { residents: query, location: location.name },
												}}
											>
												<tr className="cursor-pointer bg-white text-black">
													<td className="px-6 py-4 text-sm font-medium text-gray-800 text-center whitespace-nowrap">
														{location.name}
													</td>
													<td className="px-6 py-4 text-sm text-gray-800 text-center whitespace-nowrap">
														{location.type}
													</td>
													<td className="px-6 py-4 text-sm text-gray-800 text-center whitespace-nowrap">
														{location.dimension}
													</td>
													<td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
														<a
															className="text-green-500 hover:text-green-700"
															href="#"
														>
															{location.residents.length}
														</a>
													</td>
												</tr>
											</Link>
										);
									})
								) : (
									<> Locations are yet loading</>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
