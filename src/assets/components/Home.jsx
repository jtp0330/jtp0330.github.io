import react from 'react'
import homestyle from '../css/Home.module.css'
function Home() {
    return (
        <div className="home-page text-center">
            <div className="welcome">
                <h1>Welcome</h1>
            </div>
            <div className={homestyle.introduction}>
                <img src="./src/assets/images/Portrait.jpeg" alt="My Portrait" width="400" height="550"></img>
                <p>My name, is Jared Park</p>
            </div>
            {/* <div class="projects">
                <h1>My Projects</h1>
                <Showcase />
            </div> */}
        </div>
    )
} export default Home