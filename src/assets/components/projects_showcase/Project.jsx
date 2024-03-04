import react from 'react'
import projectstyle from '../..//css/Project.module.css'
const Project = (props) => {

    //destructuring
    const { projectName, projectDescription, projectLink } = props;

    return (
        <div className="project">
            <div className={projectstyle.project_content}>
                <img src="" alt="Project picture" />
                <div className="project-text">
                    <h3 id="project_header">{projectName}</h3>
                    <p>{projectDescription}</p>
                    <a href={projectLink}>{projectLink}</a>
                </div>
            </div>
        </div>
    )
}
export default Project;
