import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

        
        function NavScrollExample() {
          return (
            <div>
            <Navbar expand="lg" className="bg-body-tertiary">

                <Navbar.Brand href="#">Bike's</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Link className='nav-link' to='/'>Home </Link>
                    <Link className='nav-link' to='/about'>About </Link>
                    <Link className='nav-link' to='/services'>Services </Link>
                    <Link className='nav-link' to='/signup'>Signup </Link>
          
                  </Nav>
                </Navbar.Collapse>
              
            </Navbar>
            </div>
          );
        }

        
        
        export default NavScrollExample;
    

