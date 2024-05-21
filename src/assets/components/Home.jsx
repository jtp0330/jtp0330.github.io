import { useState, useEffect, useRef } from 'react'
import { useInView, InView } from 'react-intersection-observer'
import homestyle from '../css/Home.module.css'
//utilize intersection observer to display welcome, then your infor card


const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
    const elementsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            setIsVisible(intersectingEntry !== undefined);
        });

        elementsRef.current.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, [elementsRef]);


    return (
        <div className={homestyle.home_page}>
            <header ref={el => elementsRef.current.push(el)}>
                <h1 className={`title ${!isVisible ? '' : 'visible'}`}>Welcome</h1>
            </header>
            <main>
                <div className={homestyle.introduction + `portrait ${!isVisible ? '' : 'visible'}`} ref={el => elementsRef.current.push(el)}>
                    <img src="./src/assets/images/Portrait.jpeg" alt="My Portrait" width="400" height="550" className={`portrait ${!isVisible ? '' : 'visible'}`}></img>
                    <div className={`portrait ${!isVisible ? '' : 'visible'}`}>
                        <p className={`portrait ${!isVisible ? '' : 'visible'}`}>My name, is Jared Park.
                            <br />
                            <br />I am a SWE | IT Support | Cloud Operations
                            <br />with an interest in Cloud Computing.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );


};
export default Home;