import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";
import ThirdTask from "./components/ThirdTask/ThirdTask";
import "./App.css";
import { useState } from "react";

function App() {
	const [customer, setCustomer] = useState({});
	const { discount, setDiscount } = useState(0);
	const calculateDiscount = () => {
		if (parseInt(customer.shopCount) !== 5) {
			if (parseInt(customer.totalPrice) >= 300_000) {
				setDiscount((parseInt(customer.totalPrice) * 5) / 100);
			}
			if (parseInt(customer.totalPrice) >= 550_000) {
				setDiscount((parseInt(customer.totalPrice) * 7.5) / 100);
			}
			if (parseInt(customer.totalPrice) >= 1_000_000) {
				setDiscount((parseInt(customer.totalPrice) * 11) / 100);
			}
		}
	};

	return (
		<>
			<FirstTask />
			<SecondTask />
			<ThirdTask />
			<div>
				<h1>Task 6</h1>
				<form>
					<input type="text" placeholder="Name" onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
					<input
						type="number"
						placeholder="How many times this customer shop here?"
						onChange={(e) => setCustomer({ ...customer, shopCount: e.target.value })}
					/>
					<input
						type="number"
						placeholder="Total Price"
						onChange={(e) => setCustomer({ ...customer, totalPrice: e.target.value })}
					/>
					<button>Calculate</button>
				</form>
				{discount && <h2>discount: {discount}</h2>}
			</div>
		</>
	);
}

export default App;
