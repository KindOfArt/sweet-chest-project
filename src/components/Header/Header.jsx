import React from "react";

import mapMarker from "./images/Map-marker.svg"
import telephone from "./images/Telephone.svg"

export const Header = () => {
	return <>
		<a className="header__title" href="./"><h1>Сладкий сундук</h1></a>
		<nav className="header__nav">
			<address>
				<ul className="header-nav__list">
					<li className="header-nav__item header-nav-item-map-link">
						<img src={mapMarker} alt="" />
						<a className="text-400-12" rel="noopener noreferrer nofollow" target="_blank" href="https://www.google.com/maps/place/%D0%9A%D0%BE%D0%BD%D0%B4%D0%B8%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F+Cakelab/@50.0124033,36.2232668,14z/data=!4m10!1m2!2m1!1z0LrQvtC90LTQuNGC0LXRgNGB0LrQsNGPINGF0LDRgNGM0LrQvtCy!3m6!1s0x4127a1f220c4db8f:0xed8a1edd924bfd0d!8m2!3d50.0124033!4d36.2407763!15sCifQutC-0L3QtNC40YLQtdGA0YHQutCw0Y8g0YXQsNGA0YzQutC-0LJaKSIn0LrQvtC90LTQuNGC0LXRgNGB0LrQsNGPINGF0LDRgNGM0LrQvtCykgEMZGVzc2VydF9zaG9wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJETUMxSU1FdFJFQUXgAQA!16s%2Fg%2F11gxjwj_2j">м.Харків, вулиця Трінклера, 24</a></li>
					<li className="header-nav__item header-nav-item-telephone-link text-700-20">
						<img src={telephone} alt="" />
						<div>
							<a href="tel:0660001122"> (066) 000-11-22</a>
							<p className="text-400-13">Ежедневно с 9:00 до 20:00</p>
						</div>
					</li>
				</ul>
			</address>
		</nav>
	</>;
};
