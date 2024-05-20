import { useState, useEffect, useRef } from 'react'
import { useInView, InView } from 'react-intersection-observer'
import homestyle from '../css/Home.module.css'
//utilize intersection observer to display welcome, then your infor card


function Home() {


    const [isIntersecting, setisIntersecting] = useState(false);
    const ref = useRef(null);
    const titleRef = useRef(null);
    const portraitRef = useRef(null);


    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll("div").forEach((element) => {
                element.classList.add("fadeIn");
            });
        } else {
            ref.current.querySelectorAll("div").forEach((element) => {
                element.classList.remove("fadeIn");
            });
        }
    }, [isIntersecting])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setisIntersecting(entry.isIntersecting);
            },
            { rootMargin: "-300px" }
        );
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);


    return (
        <div className={homestyle.home_page}>
            <header>
                <h1 className={homestyle.screenVisible} ref={ref}>Welcome</h1>
            </header>
            <main>
                <div className={homestyle.introduction + ' ' + homestyle.screenHidden} ref={ref}>
                    <img src="./src/assets/images/Portrait.jpeg" alt="My Portrait" width="400" height="550"></img>
                    <div>
                        <p>My name, is Jared Park.
                            <br />
                            <br />I am a SWE | IT Support | Cloud Operations
                            <br />with an intense interest in Cloud Computing.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )



    //assist code
    //     useEffect(() => {
    //         const observer = new IntersectionObserver(entries => {
    //             const entry = entries[0];
    //             setIsVisible(entry.isIntersecting);
    //         });

    //         if (titleRef.current) {
    //             observer.observe(titleRef.current);
    //         }

    //         return () => observer.disconnect();
    //     }, [titleRef]);

    //     return (
    //         <div className="welcome-page">
    //             <div className="title-container" ref={titleRef}>
    //                 <h1 className={`title ${isVisible ? 'visible' : ''}`}>Welcome!</h1>
    //             </div>
    //             <div className="portrait-container" ref={portraitRef}>
    //                 <img src="your-portrait.jpg" alt="Your Portrait" className={`portrait ${isVisible ? 'visible' : ''}`} />
    //             </div>
    //         </div>
    //     );
    // };

} export default Home