import { Link } from "react-router-dom";
import { navConst } from "./const";
import { useState } from "react";
import MenuBtn from "../MenuBtn";


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
            <MenuBtn menuActive={menuActive} setMenuActive={setMenuActive} />
        </nav>
    );
}
 
export default Nav;