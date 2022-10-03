import { useState } from "react";

function SecondTask() {
	const [value, setValue] = useState("");
	const removeDuplicate = (str, e) => {
		e.preventDefault();
		setValue([...new Set(str)].join(""));
	};
	return (
		<div>
			<h1>Task 2</h1>
			<h2>Remove Duplcate Character's</h2>
			<form>
				<input type="text" value={value} onChange={(evt) => setValue(evt.target.value)} />
				<button type="submit" onClick={(e) => removeDuplicate(value, e)}>
					Remove!
				</button>
			</form>
			{value && <h2>Result: {value}</h2>}
		</div>
	);
}

export default SecondTask;
