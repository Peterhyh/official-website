import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../app/assets/img/wsigniture.png';
import { useEffect, useState } from 'react';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const fadingNavbar = () => {
        if (window.scrollY > 20) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', fadingNavbar)
        return () => {
            window.removeEventListener('scroll', fadingNavbar)
        }
    }, [])

    return (
        <Navbar className={`nav ${showNav && 'navbar_dark'}`} dark sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={Logo} alt="Peter's signiture in white" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' >
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/photo' >
                            <i className='fa fa-duotone fa-image fa-lg' /> Photography
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/contact' >
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;