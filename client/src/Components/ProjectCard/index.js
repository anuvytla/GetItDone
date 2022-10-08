import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <div className='project-card'>            
            <Link to={`/project/${project._id}`} >
                <h3 className="ml-3">{project.title}</h3>
                <p className="ml-3">{project.description}</p>
            </Link>
        
        </div>
    )
}

export default ProjectCard;