import { useState } from 'react'
import { useInView, InView } from 'react-intersection-observer'
import homestyle from '../css/Home.module.css'
//utilize intersection observer to display welcome, then your infor card


function Home() {

    const observer = new IntersectionObserver((sections) => {
        sections.forEach((section) => {
            console.log(section)
            if (section.isIntersecting) {
                section.target.classList.add('screenVisible')
            }
            else {
                section.target.classList.remove('screenVisible')
            }
        }
        )
    });
    const invisibleElements = document.querySelectorAll(".screenHidden")
    invisibleElements.forEach((element) => { observer.observe(element) });


    return (
        <div className={homestyle.home_page}>
            <h1 className={homestyle.screenVisible}>Welcome</h1>
            <div className={homestyle.introduction + ' ' + homestyle.screenHidden}>
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