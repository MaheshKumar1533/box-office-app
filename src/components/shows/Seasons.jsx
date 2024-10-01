const Seasons = ( { seasons } ) => {
    return (
		<div>
            <h2>Seasons</h2>
            <p>Seasons in Total: {seasons.length}</p>
            <p>Episodes in Total: {seasons.reduce((sum, season) => (sum + season.episodeOrder), 0)}</p>
			<div>{seasons.map((e) => (
                <div key={e.id}>
                    <p>Season: {e.number}</p>
                    <p>{e.episodeOrder ? `Episodes: ${e.episodeOrder}` : ''}</p>
                </div>
            ))}</div>
		</div>
	);
}

export default Seasons;