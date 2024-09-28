const ShowMainData = ({ image, name, rating, summary, gerne }) => {
	return (
		<div>
			<img src={image} alt="" />
			<h1>{name}</h1>
			<div >{!!rating.average || "N/A"}</div>
			<div dangerouslySetInnerHTML={{ __html: summary }} />
      <h3>Gernes</h3>
			<ul>
				{gerne.map((g) => (
					<li>{g}</li>
				))}
			</ul>
		</div>
	);
};

export default ShowMainData;
