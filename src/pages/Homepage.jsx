import { useState } from "react";

const Homepage = () => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

    const onSearch = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`);
        const body = await response.json();
        console.log(body);
    };

	return (
		<div>
			<form onSubmit={onSearch}>
				<input
					type="text"
					name="q"
					value={inputValue}
					onChange={onInputChange}
				/>
				<button
					type="submit"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Homepage;
