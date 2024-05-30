import aboutsytle from '../css/About.module.css'
import Skill from './Skill.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {

    return (
        <div className={aboutsytle.about}>
            <p className="display-3">My CS Journey</p>

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
                <br />Development Skills
            </small></p>

            <div className="skills">
                <Row>
                    <Col><Skill appProficiency={50} appName="HTML" imgPath="./src/images/html5.svg" /></Col>
                    <Col><Skill appProficiency={10} appName="CSS" imgPath="./src/images/css3.svg" /></Col>
                    <Col><Skill appProficiency={65} appName="JavaScript" imgPath="./src/images/kisspng-javascript-programmer-node-js-web-application-vector-markup-language-5b173fc201e143.7543356315282503060077.png" /></Col>
                </Row>
                <Row>
                    <Col><Skill appProficiency={30} appName="Python" imgPath="./src/images/python.svg" /></Col>
                    <Col><Skill appProficiency={65} appName="Java" imgPath="./src/images/java.svg" /></Col>
                    <Col><Skill appProficiency={70} appName="Spring" imgPath="./src/images/spring.svg" /></Col>
                </Row>
                <Row>
                    <Col><Skill appProficiency={80} appName="React" imgPath="./src/images/react.svg" /></Col>
                    <Col><Skill appProficiency={100} appName="Bash" imgPath="./src/images/bash.svg" /></Col>
                    <Col><Skill appProficiency={90} appName="Linux" imgPath="./src/images/linux.svg" /></Col>
                </Row>

            </div>
        </div>
    );
};
export default About
