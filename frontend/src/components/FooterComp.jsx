/*
 * Footer Of Entire Application
 */

import { Row, Col } from "react-bootstrap";

const Footer = () => {

  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer>
        <Row>
          <Col>
            <br />
            <p className='text-center bg-dark text-white'>
              <small className='text-secondary'>
                &copy; {currentYear} Copyright:  
              </small> shubhansh7777@gmail.com
            </p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;
