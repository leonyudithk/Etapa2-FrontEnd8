import React from 'react';
import { Container, Navbar, NavLink, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Nav.Link> 
                  <Image src='https://res.cloudinary.com/danimel/image/upload/v1646005470/logo_jsnmjs.jpg' width={80} alt=''/>
</Nav.Link>
                    <Navbar.Brand href="#home">  El Vivero</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <NavLink> 
                         <Link  to='/'>Home</Link>
                          </NavLink>
                      <NavLink>
                      <Link to='/listar'>Listar</Link>
                      </NavLink>
                      <Nav>
                     <Nav.Link><Link to='login'>Login</Link> </Nav.Link> 
                      </Nav>

                      
                      
                      
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;