/*
 * Footer Of Entire Application
 */

import {Container, Row, Col} from "react-bootstrap";

const Footer = () => {

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <Row>
          <Col>
            <br />
            <p className='text-center bg-dark text-white'>
              &copy; {currentYear} Copyright : shubhansh7777@gmail.com
            </p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
