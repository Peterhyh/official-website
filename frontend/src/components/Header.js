import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
        <Navbar className='nav' dark expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/' >
                            [ Home ]
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/photo' >
                            [ Photography ]
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
};

export default Header;