
import './App.css';
import Card from '../components/Card';

function App() {

	return (
		<>
			<h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>chai aur react</h1>
			<div className='flex gap-4'>
			<Card name='Shubhansu' message="Shubhansu Loves Anushka" baby="Anushka"/>
			<Card name="Anushka" message="Anushka Loves Shubhansu" baby={"Shubhansu"}/>
			
			</div>
			
		</>
	);
}

export default App;
