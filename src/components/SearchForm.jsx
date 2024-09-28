import { useState } from "react";

const SearchForm = ({ onSearch }) => {
	const [inputValue, setInputValue] = useState("");
	const [inputType, setInputType] = useState(null);

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		onSearch({
			q: inputValue,
			type: inputType,
		});
	};

	const onTypeChange = (event) => {
        setInputType(event.target.value);
    };

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="q"
				value={inputValue}
				onChange={onInputChange}
			/>
			<label>
				<input
					type="radio"
					name="type"
					id="type"
					value="shows"
					checked={inputType === "shows"}
					onChange={onTypeChange}
				/>{" "}
				Shows
			</label>
			<label>
				<input
					type="radio"
					name="type"
					id="type"
					value="actors"
					checked={inputType === "actors"}
					onChange={onTypeChange}
				/>{" "}
				Actors
			</label>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchForm;
