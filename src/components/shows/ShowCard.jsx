import { Link } from "react-router-dom";

const ShowCard = ({ id, name, image, summary }) => {

    const strippedSummary = summary ? summary.split(" ").splice(0, 10).join(' ').replace(/<.+?>/g, "") : "No Description";

    return (
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <p>{strippedSummary}</p>
            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <button>Star me</button>
            </div>
        </div>
    );
};

export default ShowCard;