import { Link } from "react-router-dom";
import { projectsConst } from "./const";

const ProjectsRender = () => {
    return (
        <div>
            <h2 className="h2 projects-box__title">Мое портфолио</h2>
            <div className="projects-container">
                <ul className="projects">
                {projectsConst.map((project) => 
                    <li className="project" key={project.name}>
                    <img className="project__img" src={project.img} alt={project.name}/>
                    <h3 className="projects__title">{project.name}</h3>
                    </li>
                )}
                </ul>
            </div>
            <Link to='/contacts'>
                <button className="btn-next btn-next_projects">Контакты</button>
            </Link>
        </div>
    );
}
 
export default ProjectsRender;