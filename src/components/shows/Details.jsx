const Details = ({ status, network, premiered }) => {
    return (
        <div>
        <h1>Details</h1>
        <p>Status: {status}</p>
        <p>Network: {network ? network.name : ""}</p>
        <p>Premiered: {premiered}</p>
        </div>
    );
}

export default Details;