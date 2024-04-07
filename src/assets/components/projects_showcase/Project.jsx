import react from 'react'
import projectstyle from '../..//css/Project.module.css'
import Card from 'react-bootstrap/Card'

const Project = (props) => {

    //destructuring
    const { projectName, projectDescription, projectLink } = props;

    return (
        <Card className={`${projectstyle.projectContent} hover-zoom hover-shadow`} bg="dark" border="light">
            <Card.Img variant="top" src="#" alt="Project picture" />
            <Card.Body>
                <div className="project-text">
                    <Card.Title><h3 id="project_header">{projectName}</h3></Card.Title>
                    <Card.Text>
                        <p>{projectDescription}</p> */
                        <a href={projectLink}>{projectLink}</a>
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Project;
