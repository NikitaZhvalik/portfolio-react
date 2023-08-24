import Nav from "../components/Nav";
import ProjectsRender from "../components/Projects";

const Projects = () => {
    return (
        <div className="projects-box">
            <Nav />
            <ProjectsRender />
            <button className="btn-next btn-next_projects">Контакты</button>
        </div>
    );
}

export default Projects;