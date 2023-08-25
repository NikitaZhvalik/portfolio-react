import { Link } from "react-router-dom";
import { navConst } from "./const";
import { useState } from "react";


const Nav = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="nav-box">
            <ul className="nav">
                {navConst.map((nav) => 
                    <li key={nav.name} className="nav__list nav__list_contacts">
                        <Link to={nav.link}>
                            {nav.name}
                        </Link>
                    </li>
                )}
            </ul>
            
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
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
        </nav>
    );
}
 
export default Nav;