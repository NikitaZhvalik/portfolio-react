import Nav from "../components/Nav";
import SkillsRender from "../components/Skills";

const Skills = () => {
    return (
        <div className="skills-box">
            <Nav />
            <SkillsRender />
            <button className="btn-next">Проекты</button>
        </div>
    );
}

export default Skills;