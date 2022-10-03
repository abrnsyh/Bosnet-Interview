import { useState } from "react";
import "./ThirdTask.css";

function ThirdTask() {
	const [values, setValues] = useState({});
	const nameValidator = /[0-9a-zA-Z]{3,}/;
	const phoneValidator = /[0-9]{11, 14}/;
	const emailValidator = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (nameValidator.test(values.name) === true) {
			if (emailValidator.test(values.email) === true) {
				if (phoneValidator.test(values.phone) === true) {
					return alert("Form Submited");
				}
				return alert("Phone must have atleast 11 digit's");
			} else {
				return alert("Please enter an email with a vaild format");
			}
		}
		return alert("Name must have atleast 3 character's");
	};
	return (
		<div className="form-container" onSubmit={(e) => handleSubmit(e)}>
			<h1>Task 3</h1>
			<h2>Form Validation</h2>
			<form className="form-container">
				<label htmlFor="developer-name">Dev Name</label>
				<input
					type="text"
					name="developer-name"
					id="developer-name"
					onChange={(e) => setValues({ ...values, name: e.target.value })}
					required
				/>
				<label htmlFor="email">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					onChange={(e) => setValues({ ...values, email: e.target.value })}
					required
				/>
				<label htmlFor="phone-number">Phone Number</label>
				<input
					type="text"
					name="phone-number"
					id="phone-number"
					onChange={(e) => setValues({ ...values, phone: e.target.value })}
				/>
				<button type="submit">Submit!</button>
			</form>
		</div>
	);
}

export default ThirdTask;
