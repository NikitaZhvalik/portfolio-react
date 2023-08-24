import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const About = () => {
    const text = 'Привет, я Никита';
    const textTypeSpeed = 100;
    const pause = 1500;
    const textDelSpeed = 60;
    const textContainerRef = useRef(null);

	useEffect(() => {
    const textContainer = textContainerRef.current;
    let charIndex = 0;

    function typeText() {
		textContainer.textContent = text.slice(0, charIndex++);

		if (charIndex <= text.length) {
			setTimeout(typeText, textTypeSpeed)
		} else {
			setTimeout(eraseText, pause)
		}
    }

    function eraseText() {
		textContainer.textContent = text.slice(0, charIndex--);

		if (charIndex >= 0) {
			setTimeout(eraseText, textDelSpeed)
		} else {
			charIndex = 0
			setTimeout(typeText, pause)
		}
    }

    typeText();
	}, []);

    return (
        <div className="about">
            <h1 className="about__title">
                <span className="about__title animated-text" ref={textContainerRef}></span>
            </h1>
            <p className="about__text">
                Я Front-end разработчик, ориентированный на результат при создании
                SPA приложений с использованием React. Хотелось бы найти проектную
                работу на постоянной основе в компании с современным подходом к
                разработке и сплоченной командой.
            </p>
            <Link to='/skills'>
                <button className="btn-next">Навыки</button>
            </Link>
        </div>
    );
}

export default About;


