import { useState } from 'react'
import showcasestyle from '../../css/Showcase.module.css'
import Project from './Project.jsx'
const Showcase = () => {

    const [projectPopUp, setprojectPopUp] = useState(false);
    const handlePopUp = () => {
        if (projectPopUp) {
            return (<projectPopUp onClose={setprojectPopUp(!projectPopUp)} />)
        }
        return;
    };
    return (
        <div className={showcasestyle.showcase}>
            <h1>My Projects</h1>
            <div className={showcasestyle.projects}>
                <Project className={showcasestyle.project} projectName="BrightIdeas" projectDescription="A full-stack application, designed with MERN to create a collaborative website for users to share and manage their ideas." projectLink="https://github.com/jtp0330/brightIdeas" onClick={handlePopUp()} />
                <Project className={showcasestyle.project} projectName="Bread" projectDescription="Mobile app for users to help manage budgeting" projectLink="https://github.com/jtp0330/Bread-app" />
                <Project className={showcasestyle.project} projectName="Test Project" projectDescription="This a test" projectLink="Test Link" />
            </div>
        </div>

    );
};
export default Showcase