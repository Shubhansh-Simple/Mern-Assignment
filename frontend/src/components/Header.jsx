//import { FaShoppingCart }         from 'react-icons/fa';

// React-bootstrap
import { 
  // Row, 
  // Col, 
         Button,
         Navbar,
         Nav,
         Container }     from 'react-bootstrap';

// Router
import { LinkContainer } from 'react-router-bootstrap'; 

// Icons
//import { IconContext } from "react-icons";
import { ImUserPlus } from "react-icons/im";

/*
 * Header of the HomeScreen
 */
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>

          {/* LINK - Candidate List Page */}
          <Nav className='justify-content-left'>

            <LinkContainer to='/'>
              <Navbar.Brand>
                <strong>Candidate List</strong>
              </Navbar.Brand>
            </LinkContainer>
          </Nav>

          {/* LINK - Create Candidate Page */}
          <Nav className='justify-content-right'>

            <LinkContainer to='/candidate'>
              <Nav.Item>
                <Button variant='danger'>
                    <ImUserPlus />
                    &nbsp;
                    Add Candidate
                </Button>
              </Nav.Item>
            </LinkContainer>
          </Nav>


        </Container>
      </Navbar>
    </header>
  )
}

export default Header;

