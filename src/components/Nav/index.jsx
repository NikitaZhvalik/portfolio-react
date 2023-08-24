import { Link } from "react-router-dom";
import { navConst } from "./const";

const Nav = () => {
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
        </nav>
    );
}
 
export default Nav;