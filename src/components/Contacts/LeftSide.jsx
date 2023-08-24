import { leftSideConst } from "./const";

const LeftSide = () => {
    return (
        <div className="left-side">
        <h2 className="h2 left-side__title">Связаться со мной</h2>
        <ul className="left-side__box">
            {leftSideConst.map((contact) => 
                <li key={contact.subtitle}>
                <a className="left-side__link" target="_blank" href="https://github.com/NikitaZhvalik">
                    <img className="left-side__img" src={contact.img} alt="" />
                    <h4 className="left-side__subtitle">{contact.subtitle}</h4>
                    <p className="left-side__text">{contact.descr}</p>
                </a>
            </li>
            )}
        </ul>
      </div>
    );
}
 
export default LeftSide;