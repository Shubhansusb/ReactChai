import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [color, setColor] = useState('olive');

	return (
		<div className='w-screen h-screen ' style={{backgroundColor: color}}>
			<div className='flex flex-wrap gap-3 border-4 rounded-3xl justify-center  '>
				<button onClick={() => setColor('red')} className='bg-red-500 text-white'>red</button>
				<button onClick={() => setColor('blue')} className='bg-blue-500 text-white'>blue</button>
				<button onClick={() => setColor('amber')} className='bg-amber-500 text-white'>saffron</button>
				<button onClick={() => setColor('pink')} className='bg-pink-500 text-white'>pink</button>
			</div>
		</div>
	);
}

export default App;
