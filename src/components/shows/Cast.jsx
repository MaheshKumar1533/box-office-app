const Cast = ( { cast } ) => {
    return <div>
        {cast.map(( person ) => (
            <div key={person.id}>
                <img src={person.person.image.medium} alt="" />
                <p>{person.person.name} | {person.character.name}</p>
            </div>
        ))}
    </div>;
}

export default Cast;