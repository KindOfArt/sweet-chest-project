import React from 'react';

import img1 from './images/img.jpg';
import img2 from './images/img-1.jpg';
import img3 from './images/img-2.jpg';
import img4 from './images/img-3.jpg';
import img5 from './images/img-4.jpg';
import img6 from './images/img-5.jpg';
import img7 from './images/img-6.jpg';
import img8 from './images/img-7.jpg';
import img9 from './images/img-8.jpg';
import cloud from "./images/01.png"

const Catalog = () => {
	const berry = "berry.png"
	const leaf = "leaf.png"
	return (
		<div className="catalog ">
			<div className='wrapper'>
				<div className='catalog__img-berry'>
					<img src={berry} alt="" />
					<img src={leaf} alt="" />
					<img src={leaf} alt="" />
				</div>
				<h2 className="catalog__title">Для любых событий и дорогих вам людей</h2>
				<ul className="catalog__list">
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img1} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Кремовый замок</h3>
								<p className="item__description">
									Нежный крем любого цвета на выбор, вафельная основа
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img2} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Малиновый рай</h3>
								<p className="item__description">
									Воздушный крем, темная основа и ягода малины
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img3} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Фейерверк</h3>
								<p className="item__description">
									Разноцветные крем, с бисквитной основой
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img4} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Шоколадный мир</h3>
								<p className="item__description">
									Ореховая стружка, нежный крем и шоколадная основа
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img5} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Слезы дракона</h3>
								<p className="item__description">
									Нежный крем любого цвета на выбор, вафельная основа
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img6} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Летняя фантазия</h3>
								<p className="item__description">
									Украшения в форме сердец, для любимого человека
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img7} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Мыс безумия</h3>
								<p className="item__description">
									Разноцветная основа, стружка и нежный крем
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img8} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Облачная сказка</h3>
								<p className="item__description">
									Светлая основа, нежный крем со стружкой сверху
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
					<li className="catalog__item item">
						<div className="item-thunk">
							<div className="item__img-thunk">
								<img src={img9} alt="" className="item__img" />
							</div>
							<div className="item__description-thunk">
								<h3 className="item__description-title">Темный рыцарь</h3>
								<p className="item__description">
									Тёмная основа, нежный крем и вкусные шарики
								</p>
								<div className="item__prise">150 ₴/шт.</div>
								<div className="item__button-thunk">
									<button type="button" className="item__button button">
										Заказать
									</button>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className='catalog__cloud-block'>
				<img className='catalog__cloud' src={cloud} alt="" />
			</div>
		</div>
	);
};

export default Catalog;
