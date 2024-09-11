import { useState } from "react";
import { searchForShows, searchForActors } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ActorGrid from "../components/actors/ActorGrid";
import ShowGrid from "../components/shows/ShowGrid";
import { useQuery } from "@tanstack/react-query";

const Homepage = () => {
	const [filter, setFilter] = useState("");

	const { data: apiData, error: apiError } = useQuery({
		queryKey: ["search", filter],
		queryFn:
			filter.type === "shows"
				? () => searchForShows(filter.q)
				:() =>  searchForActors(filter.q),
		enabled: !!filter,
		refetchOnWindowFocus: false,
	});

	const onSearch = async ({ q, type }) => {
		setFilter({ q, type });
	};

	const renderApiData = () => {
		if (apiError) {
			return <div>Error occured: {apiError.message}</div>;
		}
		if (apiData?.length === 0) {
			return <div>No results found.</div>;
		}
		if (apiData) {
			return apiData[0].show ? (
				<ShowGrid shows={apiData} />
			) : (
				<ActorGrid actors={apiData} />
			);
		}
		return null;
	};

	return (
		<div>
			<SearchForm onSearch={onSearch} />
			<div>{renderApiData()}</div>
		</div>
	);
};

export default Homepage;
