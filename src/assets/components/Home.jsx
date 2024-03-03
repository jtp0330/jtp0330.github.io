import react from 'react'

function Home() {
    return (
        <main>
            <div class="welcome">
                <h1>Welcome to My Webpage</h1>
            </div>
            <div class="about">
                <img src="../assets/images/Resized_20220527_173453.jpeg" alt="My Portrait" width="200" height="250" />
                <p>My name, is Jared Park</p>
            </div>
            {/* <div class="projects">
                <h1>My Projects</h1>
                <Showcase />
            </div> */}
            <div class="contact">
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="https://www.linkedin.com/in/jared-park-computer-scientist159/">LinkedIn</a></li>
                    <li><a href="https://github.com/jtp0330">GitHub</a></li>
                </ul>
            </div>
        </main>
    )
} export default Home;