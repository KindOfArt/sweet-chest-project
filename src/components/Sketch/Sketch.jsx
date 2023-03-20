import React from "react";
import iPhone_Х_Mockup from "./images/iPhone_Х_Mockup.png"
import cloud from "./images/02.png"


export const Sketch = () => {
	return <section className="sketch">
		<div className="sketch-background"></div>
		<div className="wrapper">
			<div>
				<img src={iPhone_Х_Mockup} alt="" />
			</div>
			<div className="sketch-block">
				<div className="sketch-block__sketch-bait">
					<h2 className="sketch-bait__overhead bait-overhead">Не нашли то что нужно?</h2>
					<h3 className="sketch-bait__title bait-title">Приготовим заказ любой сложности по фото или эскизу</h3>
					<p className="sketch-bait__sup-title bait-sup">Загрузите фотографию или эскиз капкейков и мы рассчитаем стоимость за 30 минут</p>
				</div>
				<div className="sketch-block__link-row sketch-link-row bait-link-row">
					<button className="sketch-link-row__link bait-link">Загрузить фотографию</button>
				</div>
			</div>
		</div>
		<div className="sketch__cloud-block">
			<img className="cloud-block__cloud" src={cloud} alt="" />
		</div>

	</section>;
};
