import react from 'react'
import aboutsytle from '../css/About.module.css'

function About() {
    return (
        <div className={aboutsytle.about}>
            <img src="../images/Portrait.jpeg" alt="My Portrait" width="200" height="250" />
            <p>Here is the start of my CS journey.</p>

            <p>My first introduction to code and programming concepts was in high school of my senior year,
                <br />where I became intrigued by the complex systems, orderly designs, and
                <br />collaborated effort to modify our daily lives.
                <br />
                <br />After high school, I furthered my knownledge and expertise by obtaining
                <br />a Bachelor's Degree in CS at San Jose State University.
                <br />While studying, I secured an internship at [24]7.ai, as an IT Support Engineer I where I focus primarily on
                <br />maintaining corporate systems, Identity Access Management(IAM), and developing scripts to more efficiently
                <br />deploy, manage and delegate IT-managed software and hardening.
                <br />
                <br />Skills
            </p>

            <div className="skills">
                <p>dropdown</p>
                <p>List of Toasts that filter and align, based on drop down option</p>
                <p>Toast should have skillname, and progress bar for proficiency</p>    
            </div>
        </div>
    );
} export default About