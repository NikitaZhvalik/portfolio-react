import { Link } from "react-router-dom";
import { skillsConst } from "./const";

const SkillsRender = () => {
    return (
        <div>
            <h2 className="h2 skills-box__title">Мои навыки</h2>
            <ul className="skills">
                {skillsConst.map((skill) => 
                    <li key={skill.name} className="skill">
                        <img src={skill.img} alt="" />
                        <h3 className="skill__title">{skill.name}</h3>
                    </li>
                )}
            </ul>
            <Link to='/projects'>
                <button className="btn-next">Проекты</button>
            </Link>
        </div>
    );
}
 
export default SkillsRender;