import ActorCard from "./ActorCard";

const ActorGrid = ({ actors }) => {
    console.log(actors)
	return (
		<div>
			{actors.map((data) => (
				<ActorCard
					key={data.person.id}
					id={data.person.id}
					name={data.person.name}
					image={
						data.person.image
							? data.person.image.medium
							: "./not-found.png"
					}
					gender={data.person.gender}
                    country={data.person.country}
                    birthday={data.person.birthday}
                    deathday={data.person.deathday}
				/>
			))}
		</div>
	);
};

export default ActorGrid;
