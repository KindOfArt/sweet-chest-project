import React from 'react';
import { ReviewsSlider } from './ReviewsSlider';

export const Reviews = () => {
	return (
		<section className="reviews">
			<div className='reviews__title-block'>
				<h2 className='reviews-title-block__title'>Почитайте отзывы довольных клиентов</h2>
			</div>
			<ReviewsSlider />
		</section>
	);
};
