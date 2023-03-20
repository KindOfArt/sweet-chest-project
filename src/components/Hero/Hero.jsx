import React from "react";


export const Hero = () => {
	const berry = "berry.png"
	const leaf = "leaf.png"
	return <section className="hero">
		<div className="hero-background"></div>
		<div className="hero-block wrapper">
			<div className="hero-block__hero-bait">
				<div className="hero-bait__berry bait-berry">
					<img src={berry} alt="" className="bait-berry-img-first" />
					<img src={berry} alt="" className="bait-berry-img-second" />
					<img src={berry} alt="" className="bait-berry-img-third" />
					<img src={leaf} alt="" className="bait-leaf-img-fhour" />
				</div>
				<h2 className="hero-bait__overhead bait-overhead">вкуснейшие</h2>
				<h3 className="hero-bait__title bait-title">Пирожные и капкейки от 60₴ / шт. с доставкой по Харькову</h3>
				<p className="hero-bait__sup-title bait-sup">Приготовим за 3 часа в день заказа.
					Доставка на авто в холодильнике.</p>
			</div>
			<div className="hero-block__link-row hero-link-row bait-link-row">
				<a className="hero-link-row__link bait-link" href="">Перейти в каталог</a>
				<p className="hero-link-row__text bait-text">9 различных видов на выбор</p>
			</div>
		</div>
	</section>;
};
