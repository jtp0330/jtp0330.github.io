import { useState } from 'react'
import showcasestyle from '/docs/assets/css/Showcase.module.css'
import Project from './Project.jsx'
import Bread from '../../../docs/assets/images/breadicon.png'
import Overcast from '../../../docs/assets/images/overcast.png'
const Showcase = () => {

    const [projectPopUp, setprojectPopUp] = useState(false);
    const handlePopUp = () => {
        if (projectPopUp) {
            return (<projectPopUp onClose={setprojectPopUp(!projectPopUp)} />)
        }
        return;
    };
    return (
        <div className={`${showcasestyle.showcase} p-5`}>
            <h1>My Projects</h1>
            <div className={showcasestyle.projects}>
                <Project className={showcasestyle.project} projectName="BrightIdeas" projectDescription="Full-stack application, designed with MERN to create a collaborative website for users to share and manage their ideas." projectLink="https://github.com/jtp0330/brightIdeas" projectImage="#" onClick={handlePopUp()} />
                <Project className={showcasestyle.project} projectName="Bread" projectDescription="Mobile application, allowing users to create, and manage their budget goals" projectLink="https://github.com/jtp0330/Bread-app" projectImage={Bread} />
                {/* <Project className={showcasestyle.project} projectName="Recipe Management" projectDescription="Application that allows save, upload and manage their recipes" projectLink="https://github.com/jtp0330/recipeManagement" projectImage="#" /> */}
                <Project className={showcasestyle.project} projectName="Overcast" projectDescription="2D Platformer, where you play as a winged pig, soaring through the clouds, spreading rainbows and sunshine" projectLink="https://github.com/jtp0330/Overcast" projectImage={Overcast} />
            </div>
        </div>

    );
};
export default Showcase