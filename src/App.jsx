import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { Sketch } from './components/Sketch/Sketch';
import { Ask_A_Question } from './components/Ask_A_Question/Ask_A_Question';
import { Reviews } from './components/Reviews/Reviews';

function App() {
	return (
		<>
			<header className='wrapper'>
				<Header />
			</header>
			<main>
				<Hero />
				<Catalog />
				<Sketch />
				<Ask_A_Question />
				<Reviews />
			</main>
			<footer></footer>
		</>
	);
}
export default App;
