import './Black.css';

export default function Black() {
	return (
		<section className='black'>
			<div className='black_left'>
				<h2 className='black_left_title'>Solutions for people like you</h2>
				<p className='black_left_text'>
					How can we help your technology and services business develop a
					revenue engine based on Hubspot?
				</p>
				<div className='black_left_btns'>
					<button className='black_left_btns_left'>Call to action</button>
					<button className='black_left_btns_right'>Call to action</button>
				</div>
			</div>
			<img
				src='/src/assets/dark.webp'
				alt='Canon camera'
				className='black_right'
			/>
		</section>
	);
}
