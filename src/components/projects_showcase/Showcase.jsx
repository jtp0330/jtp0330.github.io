import react from 'react'
import showcasestyle from '../../css/Showcase.module.css'
import Project from './Project.jsx'
function Showcase() {
    return (
        <div className={showcasestyle.showcase}>
            <header>
                <h1>My Projects</h1>
            </header>
            <div className={showcasestyle.projects}>
                <Project projectName="Test Project" projectDescription="This a test" projectLink="Test Link" />
                <Project projectName="Test Project" projectDescription="This a test" projectLink="Test Link" />
                <Project projectName="Test Project" projectDescription="This a test" projectLink="Test Link" />
            </div>
        </div>

    );
} export default Showcase