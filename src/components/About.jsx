import aboutstyle from '/docs/assets/css/About.module.css'
import Skill from './Skill.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Html from '../../docs/assets/images/html5.svg'
import Css from '../../docs/assets/images/css3.svg'
import Js from '../../docs/assets/images/javascript.svg'
import Python from '../../docs/assets/images/python.svg'
import Java from '../../docs/assets/images/java.svg'
import Bash from '../../docs/assets/images/bash.svg'
import Golang from '../../docs/assets/images/go.svg'
import Spring from '../../docs/assets/images/spring.svg'
import React from '../../docs/assets/images/react.svg'
import Windows from '../../docs/assets/images/vecteezy_window-10-logo-png-window-10-icon-transparent-png_20975574.png'
import Macos from '../../docs/assets/images/vecteezy_apple_1199813.png'
import Linux from '../../docs/assets/images/linux.svg'

const About = () => {

    return (
        <div className={`${aboutstyle.about} d-flex flex-row`}>
            <div className="d-flex flex-column w-100 p-5">
                <p className="display-3 m-3">My CS Journey</p>

                <p className="">My first introduction to code and programming concepts was in high school of my senior year,
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
                </p>
            </div>
            <div className="d-flex flex-column g-25 justify-content-center align-items-center">
                <div className="d-flex flex-row justify-content-center align-items-start">
                    <p className="f-6"><strong>Development Skills</strong></p>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center w-50">
                    <div className="row">
                        <div className="col"><Skill appProficiency={50} appName="HTML" imgPath={Html} /></div>
                        <div className="col"><Skill appProficiency={70} appName="Python" imgPath={Python} /></div>
                        <div className="col"><Skill appProficiency={25} appName="GoLang" imgPath={Golang} /></div>
                        <div className="col"><Skill appProficiency={60} appName="Windows" imgPath={Windows} /></div>
                    </div>
                    <div className="row">
                        <div className="col"><Skill appProficiency={55} appName="CSS" imgPath={Css} /></div>
                        <div className="col"><Skill appProficiency={50} appName="Java" imgPath={Java} /></div>
                        <div className="col"><Skill appProficiency={45} appName="Spring" imgPath={Spring} /></div>
                        <div className="col"><Skill appProficiency={60} appName="MacOS" imgPath={Macos} /></div>
                    </div>
                    <div className="row">
                        <div className="col"><Skill appProficiency={65} appName="JavaScript" imgPath={Windows} /></div>
                        <div className="col"><Skill appProficiency={65} appName="Bash" imgPath={Bash} /></div>
                        <div className="col"><Skill appProficiency={55} appName="React" imgPath={React} /></div>
                        <div className="col"><Skill appProficiency={45} appName="Linux" imgPath={Linux} /></div>
                    </div>

                </div>
            </div>

        </div>
    );
};
export default About
