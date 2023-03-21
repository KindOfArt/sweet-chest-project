import React from "react";
import woman from './images/woman.png'
import cloud from './images/03.png'

export const Ask_A_Question = () => {
	return <section className="ask-a-question question">
		<div className="wrapper">
			<div className="leaf-image">
				<i />
				<i />
				<i />
			</div>
			<div className="question-block">
				<div className="question-block__question-bait">
					<h2 className="question-bait__overhead bait-overhead">Кто будет готовить?</h2>
					<h3 className="question-bait__title bait-title">Лично приготовлю и всё красиво упакую для вашего события</h3>
					<ul>
						<li className="question-bait__sup-title bait-sup">Проконсультирую по выбору капкейкови придумаю нестандартную идею</li>
						<li className="question-bait__sup-title bait-sup">Приготовлю капкейки для вашего события, которые обязательно всем понравятся </li>
						<li className="question-bait__sup-title bait-sup">Аккуратно и красиво всё упакую, если вы хотите сделать приятный подарок</li>
					</ul>
				</div>
				<div className="question-block__link-row question-link-row bait-link-row">
					<button className="question-link-row__link bait-link">Задать вопрос Юлии</button>
				</div>
			</div>
			<div className="question-woman">
				<div className="question-woman__name-block">
					<h2>Юлия Кондратьева</h2>
					<p>ваш кондитер</p>
				</div>
				<img src={woman} alt="" />
			</div>
		</div>
		<div>
			<img className="question-cloud" src={cloud} alt="" />
		</div>
	</section>;
};
