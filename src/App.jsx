import { useEffect, useState } from 'react';
import './App.css';
import Black from './components/Black/Black';
import CategoryCard from './components/CategoryCard/CategoryCard';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import { categories } from './data';

function App() {
	const [screenSize, setScreenSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const visibleCategories = categories.filter(category => {
		if (screenSize > 1200) return category.desktop;
		else if (screenSize > 576) return category.tablet;
		else return category.mobile;
	});

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<section className='category_grid'>
					{visibleCategories.map(category => (
						<CategoryCard key={category.id} category={category} />
					))}
				</section>
				<Black />
			</main>

			<Gallery />
		</>
	);
}

export default App;
