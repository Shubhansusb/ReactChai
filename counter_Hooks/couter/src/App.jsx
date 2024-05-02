import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {
	let [counter, setCounter] = useState(15);
	function add() {
		console.log('button clicked');
		counter = counter + 1;
		if (counter > 20) {
			counter = counter - 1;
		}
		setCounter(counter);
	}
	const subtract = () => {
		counter = counter - 1;
		if (counter < 0) {
			counter = counter + 1;
		}
		setCounter(counter);
	};
	return (
		<>
			<div>
				<h1>Counter: {counter}</h1>
				<button onClick={add}>add:{counter}</button>
				<br />
				<button onClick={subtract}>subtract:{counter}</button>
			</div>
		</>
	);
}

export default App;
