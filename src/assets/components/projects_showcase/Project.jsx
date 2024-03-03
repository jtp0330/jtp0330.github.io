import react from 'react'
import '../css/Project.module.css'
function Project(props) {

    //destructuring
    const { projectName, projectDescription, projectLink } = props;

    return (
        <div class="project">
            <h1>{{ projectName }}</h1>
            <div class="project-image">
                <img src="" alt="Project picture" />
            </div>
            <div class="project-text">
                <p>{{ projectDescription }}</p>
                <a href="{{ projectLink }}">{{ projectLink }}</a>
            </div>
        </div>
    )
} export default Project
