import { useState, useEffect, useRef } from 'react'
import { useInView, InView } from 'react-intersection-observer'
import homestyle from '/docs/assets/css/Home.module.css'
import Portrait from '../../docs/assets/images/Portrait.jpeg'
//utilize intersection observer to display welcome, then your infor card

//incorporating Laura html into ReactJSX

//sections for our home page
const Home = () => {

    useEffect(() => {
        const sections = document.querySelectorAll(`.${homestyle.change}`);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${homestyle.visible}`, entry.isIntersecting)
                } else {
                    entry.target.classList.remove(`${homestyle.visible}`, entry.isIntersecting)
                }
                console.log(entry.target, entry.isIntersecting)
            });
        },
            //options
            {
                threshold: .10,
            }
        );

        sections.forEach(
            section => observer.observe(section)
        );
        return () => observer.disconnect();
    }, []);

    return (
        <div className={homestyle.home_page}>
            <header className={homestyle.header}>
                <h1 className={`${homestyle.change} display-1`}>Welcome</h1>
            </header>
            <main>
                <div className={`${homestyle.introduction} ${homestyle.change}`}>
                    <img src={Portrait} alt="My Portrait" />
                    <p>My name is Jared Park
                        <br />An Aspiring IT Support Engineer with an interest in DevOps and System Administration</p>
                </div>
            </main>
        </div>
    );

    

};
export default Home;