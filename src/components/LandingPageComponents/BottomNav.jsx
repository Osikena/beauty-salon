import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap'
import Logo from '../../icons/Logo.svg'

function BottomNav() {
  return (
    <Navbar collapseOnSelect expand='lg' id='bottom-navbar'>
        <Container>
            <Navbar.Brand href="/" id='logo-text'><img src={Logo} alt="logo" />Starz</Navbar.Brand>
            <Navbar.Toggle aria-controls='bottom-navbar-navbarScroll' data-bs-target='#bottom-navbar-navbarScroll' id='bottom-navbar-toggle' />
            <Navbar.Collapse id='bottom-navbar-navbarScroll' className="justify-content-end text-start">
            <Nav>
                <NavLink id='bottom-nav-list-item'>Home</NavLink>
                <NavLink id='bottom-nav-list-item'>About</NavLink>
                <NavLink id='bottom-nav-list-item'>Services</NavLink>
                <NavLink id='bottom-nav-list-item'>Portfolio</NavLink>
                <NavLink id='bottom-nav-list-item'>Press</NavLink>
                <NavLink id='bottom-nav-list-item'>Contact</NavLink>
                <NavLink id='activelink'>Appointment</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default BottomNav
