//import { FaShoppingCart }         from 'react-icons/fa';

// React-bootstrap
import { Row, Col }               from 'react-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Dropdown                   from 'react-bootstrap/Dropdown';
import { LinkContainer }          from 'react-router-bootstrap'; 

/*
 * Header of the HomeScreen
 */
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Container>

          {/* Header Title Of App */}
          <LinkContainer to='/'>
            <Navbar.Brand>Candidates List</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

                {/* Filter Buttons - Domain,Gender,Availability */}
                <Nav.Link>

                  <Row>
                    {/* Domain */}
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          Domain
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Sales</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Manager</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">I.T.</Dropdown.Item>
                          <Dropdown.Item href="#/action-4">Finance</Dropdown.Item>
                          <Dropdown.Item href="#/action-5">Marketting</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>

                    {/* Gender */}
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          Gender
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Others</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>

                    {/* Availability */}
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                          All
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Non Active</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>

                </Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header;

