import "./index.css"
import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <div className='project-card'>
            <Link to={`/project/${project._id}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </Link>
        </div>
    )
}

export default ProjectCard;