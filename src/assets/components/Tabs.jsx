import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

//use Tab Pills for desired effect

function Tabs() {

    return (
        <Tab.Container defaultActiveKey="home">
            <Nav variant="pills" className="tabLinks">
                <Nav.Item>
                    <Nav.Link eventKey="home">Home</Nav.Link>
                    <Nav.Link eventKey="about">About</Nav.Link>
                    <Nav.Link eventKey="projects">Projects</Nav.Link>
                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Tab.Container>


    )
} export default Tabs;
