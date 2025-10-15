export default function CategoryCard({ category }) {
	return (
		<div className='category_card'>
			<span
				className='category_label'
				style={{ backgroundColor: category.categoryBg }}
			>
				{category.category}
			</span>
			{category.image ? (
				<img className='image_placeholder' src={category.image} />
			) : (
				<div
					className='background_placeholder'
					style={{ backgroundColor: category.placeholderBg }}
				/>
			)}
			<span style={{ color: category.categoryBg }} className='author'>
				Adam Sandler
			</span>
			<h3 className='category_title'>{category.title}</h3>
			<p className='category_description'>{category.description}</p>
			<button
				className='category_btn'
				style={{ backgroundColor: category.buttonBg }}
			>
				{category.buttonText}
			</button>
		</div>
	);
}
