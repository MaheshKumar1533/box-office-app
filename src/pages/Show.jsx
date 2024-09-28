import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";

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
				<Details
					status={showData.status}
					network={showData.network}
					premiered={showData.premiered}
				/>
			</div>
		);
	}
	return <div>Loading...</div>;
};

export default Show;
