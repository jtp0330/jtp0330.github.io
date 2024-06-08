import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Home from './Home.jsx';
import About from './About.jsx';
import Showcase from './projects_showcase/Showcase.jsx';
import Contact from './Contact.jsx';
import tabstyle from '../css/Tabs.module.css'
//use Tab Pills for desired effect

const Tabs = () => {

    return (
        <Tab.Container id="portfolio-nav" defaultActiveKey="home" style={"backgroundColor: #8596ad"}>
            <Nav variant="pills" className={tabstyle.tabLinks} >
                <Nav.Item className={` p-1`}>
                    <Nav.Link eventKey="home" active={false} timeout={3}><h3 className={`${tabstyle.navLinks}`}>Home</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item className={` p-1`}>
                    <Nav.Link eventKey="about" active={false} timeout={3}><h3 className={`${tabstyle.navLinks}`}>About</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item className={` p-1`}>
                    <Nav.Link eventKey="projects" active={false} timeout={3}><h3 className={`${tabstyle.navLinks}`}>Projects</h3></Nav.Link>
                </Nav.Item>
                <Nav.Item className={` p-1`}>
                    <Nav.Link eventKey="contact" active={false} timeout={3}><h3 className={`${tabstyle.navLinks}`}>Contact</h3></Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className={tabstyle.tabContents}>
                <Tab.Pane eventKey="home" className={`${tabstyle.tab}`}><Home /></Tab.Pane>
                <Tab.Pane eventKey="about" className={`${tabstyle.tab}`}><About /></Tab.Pane>
                <Tab.Pane eventKey="projects" className={`${tabstyle.tab}`}><Showcase /></Tab.Pane>
                <Tab.Pane eventKey="contact" className={`${tabstyle.tab}`}><Contact /></Tab.Pane>
            </Tab.Content>
        </Tab.Container>


    )
};
export default Tabs
