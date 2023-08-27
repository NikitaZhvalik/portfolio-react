import { Link } from "react-router-dom";
import { projectsConst } from "./const";

const ProjectsRender = () => {
    return (
        <div>
            <h2 className="h2 projects-box__title">Мои проекты</h2>
            <div className="projects-container">
                <ul className="projects">
                {projectsConst.map((project) => 
                    <li className="project" key={project.name}>
                    <a href={project.link} target="_blink"><img className="project__img" src={project.img} alt={project.name}/></a>
                    <h3 className="projects__title">{project.name}</h3>
                    </li>
                )}
                </ul>
            </div>
            <div className="btn__container">
                <Link to='/contacts'>
                    <button className="btn-next btn-next_projects">Контакты</button>
                </Link>
            </div>
        </div>
    );
}
 
export default ProjectsRender;