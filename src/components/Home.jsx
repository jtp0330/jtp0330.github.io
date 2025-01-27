import { useState, useEffect, useRef } from 'react'
import { useInView, InView } from 'react-intersection-observer'
import homestyle from '/docs/assets/css/Home.module.css'
import Portrait from '../../docs/assets/images/Portrait.jpeg'
import About from './About.jsx'
import Showcase from './projects_showcase/Showcase.jsx'
import Contact from './Contact.jsx'
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
            {/* <header className={homestyle.header}> */}
            {/* </header> */}

            <main className="main">

                <section id="hero" className="hero section dark-background">

                    <img src="assets/img/alamare_falls_beach.jpg" alt="" data-aos="fade-in" />

                    <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                    {/* <h1 className={`${homestyle.change} display-1`}>Welcome</h1> */}
                    <h1 className={`${homestyle.change} display-1`}>Jared Park</h1>
                    <p className={`${homestyle.change} display-2`}><br />An Aspiring IT Support Engineer with an interest in DevOps and System Administration</p>
                        <a href="#about" className="btn-scroll" title="Scroll Down"><i class="bi bi-chevron-down"></i></a>
                    </div>

                </section>
                <section id="about" className="hero section dark-background">
                    {/* <div className={`${homestyle.introduction} ${homestyle.change}`}> */}
                    {/* <img src={Portrait} alt="My Portrait" /> */}
                        <img src="assets/img/half_dome.jpeg" alt="" data-aos="fade-in" />
                        <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                            <About />
                        </div>
                    {/* </div> */}
                </section>
                <section id="showcase" className="hero section dark-background">
                    {/* <div className={`${homestyle.introduction} ${homestyle.change}`}> */}
                    <img src="assets/img/yosemite.jpg" alt="" data-aos="fade-in" />
                        <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                            <Showcase />
                        </div>
                    {/* </div> */}
                </section>
                <section id="contact" className="hero section dark-background">
                    {/* <div className={`${homestyle.introduction} ${homestyle.change}`}> */}
                    {/* <img src={Portrait} alt="My Portrait" /> */}
                        <img src="assets/img/bryce_canyon.jpg" alt="" data-aos="fade-in" />
                        <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                            <Contact />
                        </div>
                    {/* </div> */}
                </section>
            </main>
        </div>
    );

    

};
export default Home;