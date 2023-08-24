import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about">
			<h1 className="about__title">
				Привет, я <br />
				Никита Жвалик
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