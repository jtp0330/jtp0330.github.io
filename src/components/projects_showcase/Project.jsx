import projectstyle from '../../css/Project.module.css'

const Project = (props) => {

    //destructuring
    const { projectName, projectDescription, projectLink, projectImage } = props;

    return (
        <div className={`${projectstyle.projectContent} card col-sm-3 hover-zoom hover-shadow bg-dark text-light`} border="light">
            <img className={`${projectstyle.projectImages} card-img-top`} src={`${projectImage}`} alt="Project picture" />
            <div className="card-body">
                <div className={`${projectstyle.projectText}`}>
                    <h3 className="card-title" id="project_header">{projectName}</h3>
                    <div className="card-text p-3">
                        <p className="fs-6">{projectDescription}</p>
                        <a href={projectLink} className="fs-6">View Project Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project;
