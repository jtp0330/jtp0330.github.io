import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Home from './Home.jsx';
import About from './About.jsx';
import Showcase from './projects_showcase/Showcase.jsx';
import Contact from './Contact.jsx';
import tabstyle from '../css/Tabs.module.css'
//use Tab Pills for desired effect

function Tabs() {

    return (
        <Tab.Container id="portfolio-nav" defaultActiveKey="home">
            <Nav variant="pills" className={tabstyle.tabLinks} >
                <Nav.Item className="nav-links p-1">
                    <Nav.Link eventKey="home" active={false} timeout={1.5}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-links p-1">
                    <Nav.Link eventKey="about" active={false} timeout={1.5}>About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-links p-1">
                    <Nav.Link eventKey="projects" active={false} timeout={1.5}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item className="nav-links p-1">
                    <Nav.Link eventKey="contact" active={false} timeout={1.5}>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className={tabstyle.tabContents}>
                <Tab.Pane eventKey="home" className="tab"><Home /></Tab.Pane>
                <Tab.Pane eventKey="about" className="tab"><About /></Tab.Pane>
                <Tab.Pane eventKey="projects" className="tab"><Showcase /></Tab.Pane>
                <Tab.Pane eventKey="contact" className="tab"><Contact /></Tab.Pane>
            </Tab.Content>
        </Tab.Container>


    )
} export default Tabs
