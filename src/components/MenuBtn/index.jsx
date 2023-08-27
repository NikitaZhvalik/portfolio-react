import { Link } from "react-router-dom";
import { navConst } from "../Nav/const";

const MenuBtn = ({setMenuActive, menuActive}) => {
    return (
        <div className={menuActive ? 'burger-btn burger-active' : 'burger-btn burger-unactive'} onClick={() => setMenuActive(!menuActive)}>
            <span></span>
            <div className={menuActive ? 'menu-active' : 'menu'}>
                <div className="menu__content">
                    <div className="menu__header">
                        Навигация
                    </div>
                    <ul>
                    {navConst.map((nav) => 
                        <li key={nav.name} className="burger-link">
                            <Link to={nav.link}>
                                {nav.name}
                            </Link>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default MenuBtn;