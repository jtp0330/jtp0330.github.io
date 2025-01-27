import Home from './Home.jsx';
import About from './About.jsx';
import Showcase from './projects_showcase/Showcase.jsx';
import Contact from './Contact.jsx';

const NavBar = () => {
    return (
        <nav id="navmenu" className="navmenu">
        <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="#about" className="btn-scroll" title="Scroll Down">About</a></li>
            <li><a href="#showcase" className="btn-scroll" title="Scroll Down">Projects</a></li>
            <li><a href="#contact" className="btn-scroll" title="Scroll Down">Contact</a></li>
            {/* <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
            <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
                <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
            </ul>
            </li> */}
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        
        </nav>
    )
}
export default NavBar;