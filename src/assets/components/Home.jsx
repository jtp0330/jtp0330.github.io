import react from 'react'
import homestyle from '../css/Home.module.css'
function Home() {
    return (
        <div className={homestyle.home_page}>
            <h1>Welcome</h1>
            <div className={homestyle.introduction}>
                <img src="./src/assets/images/Portrait.jpeg" alt="My Portrait" width="400" height="550"></img>
                <div>
                    <p>My name, is Jared Park.
                        <br />
                        <br />I am a SWE | IT Support | Cloud Operations
                        <br />with an intense interest in Cloud Computing.
                    </p>
                </div>
            </div>
        </div>
    )
} export default Home