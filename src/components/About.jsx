import aboutstyle from '../css/About.module.css'
import Skill from './Skill.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {

    return (
        <div className={`${aboutstyle.about} d-flex flex-row`}>
            <div className="d-flex flex-column w-100">
                <p className="display-3 m-3">My CS Journey</p>

                <p><small>My first introduction to code and programming concepts was in high school of my senior year,
                    <br />where I became intrigued by the complex systems, orderly designs, and
                    <br />collaborated effort to modify our daily lives.
                    <br />
                    <br />After high school, I furthered my knownledge and expertise by obtaining
                    <br />a Bachelor's Degree in CS at San Jose State University.
                    <br />While studying, I secured an internship at [24]7.ai, as an IT Support Engineer I where I focus primarily on
                    <br />maintaining corporate systems, Identity Access Management(IAM), and developing scripts to more efficiently
                    <br />deploy, manage and delegate IT-managed software and hardening.
                    <br />
                    <br />
                </small></p>
            </div>
            <div className="d-flex flex-column g-25 justify-content-center align-items-center">
            <div className="d-flex flex-row justify-content-center align-items-start">
                <p>Development Skills</p>
            </div>
                <div className="d-flex flex-row justify-content-center align-items-center w-50">
                    <div className="row">
                        <div className="col"><Skill appProficiency={55} appName="CSS" imgPath="./src/images/css3.svg" /></div>
                        <div className="col"><Skill appProficiency={65} appName="JavaScript" imgPath="./src/images/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc201e143.7543356315282503060077.png" /></div>
                        <div className="col"><Skill appProficiency={65} appName="JavaScript" imgPath="./src/images/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc201e143.7543356315282503060077.png" /></div>
                        <div className="col"><Skill appProficiency={50} appName="HTML" imgPath="./src/images/html5.svg" /></div>
                    </div>
                    <div className="row">
                        <div className="col"><Skill appProficiency={70} appName="Python" imgPath="./src/images/python.svg" /></div>
                        <div className="col"><Skill appProficiency={50} appName="Java" imgPath="./src/images/java.svg" /></div>
                        <div className="col"><Skill appProficiency={45} appName="Spring" imgPath="./src/images/spring.svg" /></div>
                        <div className="col"><Skill appProficiency={45} appName="Spring" imgPath="./src/images/spring.svg" /></div>
                    </div>
                    <div className="row">
                        <div className="col"><Skill appProficiency={55} appName="React" imgPath="./src/images/react.svg" /></div>
                        <div className="col"><Skill appProficiency={65} appName="Bash" imgPath="./src/images/bash.svg" /></div>
                        <div className="col"><Skill appProficiency={60} appName="Linux" imgPath="./src/images/linux.svg" /></div>
                        <div className="col"><Skill appProficiency={60} appName="Linux" imgPath="./src/images/linux.svg" /></div>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default About
