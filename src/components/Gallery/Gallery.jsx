import { useState } from 'react';
import { categories } from '../../data';
import CategoryCard from '../CategoryCard/CategoryCard';
import './Gallery.css';

export default function Gallery() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const cardsPerSlide = 3;
	const totalSlides = Math.ceil(categories.length / cardsPerSlide);

	const nextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
	};

	return (
		<section className='gallery_container'>
			<div className='categories_slider'>
				<div
					className='categories_slider_track'
					style={{ transform: `translateX(-${currentSlide * 100}%)` }}
				>
					{categories.map((category, index) => (
						<CategoryCard key={category.id} category={category} />
					))}
				</div>
			</div>
			<div className='categories_slider_controls'>
				<img
					src='/src/assets/arrow.svg'
					alt='arrow to previous'
					className='categories_slider_controls_btn_prev'
					onClick={prevSlide}
				/>

				<img
					src='/src/assets/arrow.svg'
					alt='arrow to next'
					className='categories_slider_controls_btn_next'
					onClick={nextSlide}
				/>
			</div>
		</section>
	);
}
