import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

const Show = () => {
	const { showId } = useParams();

	const { data: showData, error: showError } = useQuery({
		queryKey: ["show", showId],
		queryFn: () => getShowById(showId),
	});

	if (showError) {
		return <div>Error: {showError.message}</div>;
	}

	if (showData) {
		console.log(showData);
		return (
			<div>
				<ShowMainData
					image={showData.image.original}
					name={showData.name}
					rating={showData.rating}
					summary={showData.summary}
					gerne={showData.genres}
				/>
				<h2>Details</h2>
				<Details
					status={showData.status}
					network={showData.network}
					premiered={showData.premiered}
				/>
				<h2>Seasons</h2>
				<Seasons seasons={showData._embedded.seasons} />
				<h2>Cast</h2>
				<Cast cast={showData._embedded.cast} />
			</div>
		);
	}
	return <div>Loading...</div>;
};

export default Show;
