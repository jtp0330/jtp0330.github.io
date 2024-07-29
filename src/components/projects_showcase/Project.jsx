import projectstyle from '../../css/Project.module.css'
import Card from 'react-bootstrap/Card'

const Project = (props) => {

    //destructuring
    const { projectName, projectDescription, projectLink, projectImage } = props;

    return (
        <Card className={`${projectstyle.projectContent} hover-zoom hover-shadow bg-dark text-light`} border="light">
            <Card.Img className={projectstyle.projectImages} variant="top" src={`${projectImage}`} alt="Project picture" />
            <Card.Body>
                <div className={`${projectstyle.projectText}`}>
                    <Card.Title><h3 id="project_header">{projectName}</h3></Card.Title>
                    <Card.Text>
                        <p className="fs-6">{projectDescription}</p>
                        <a href={projectLink} className="fs-6">View Project Here</a>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Project;
