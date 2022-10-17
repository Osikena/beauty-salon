import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap'
import Phone from '../../icons/Phone.svg'
import Clock from '../../icons/Clock.svg'
import Facebook from '../../icons/Facebook.svg'
import Instagram from '../../icons/Instagram.svg'
import Twitter from '../../icons/Twitter.svg'
import Tiktok from '../../icons/Tiktok.svg'
import BottomNav from './BottomNav'


function TopNav() {
  return (
    <Container fluid id='top-navbar-container'>
        <Navbar collapseOnSelect expand='sm' id='top-navbar'>
            <Container>
                {/* <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
                <Navbar.Collapse id='navbarScroll'> */}
                    <div className="row" id='top-navbar-row'>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            <Nav>
                                <NavLink><span id='top-navbar-span'><img src={Phone} alt="phone" id='top-navbar-span-icon' />+011-456-789-23</span></NavLink>
                                <NavLink><span id='top-navbar-span'><img src={Clock} alt="clock" id='top-navbar-span-icon' />Mon-Sat (8am-9pm)</span></NavLink>
                                
                                
                            </Nav>

                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" dir='rtl'>

                            <Nav>
                                <NavLink id='top-navbar-navlink'><img src={Instagram} alt="instagram" /></NavLink>
                                <NavLink id='top-navbar-navlink'><img src={Facebook} alt="facebook" /></NavLink>
                                <NavLink id='top-navbar-navlink'><img src={Tiktok} alt="tiktok" /></NavLink>
                                <NavLink id='top-navbar-navlink'><img src={Twitter} alt="twitter" /></NavLink>
                            </Nav>

                        </div>
                    </div>
                    
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
        <BottomNav />
    </Container>
  )
}

export default TopNav
