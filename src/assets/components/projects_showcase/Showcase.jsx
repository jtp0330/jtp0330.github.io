import react from 'react'
import '../../css/Showcase.module.css'
import Project from './Project.jsx'
function Showcase() {
    return (
        <div className="showcase">
            <header>
                <h1>My Projects</h1>
            </header>
            <Project projectName="Test Project" projectDescription="This a test" projectLink="Test Link" />
        </div>
    );
} export default Showcase