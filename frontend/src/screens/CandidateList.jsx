/*
 * Read data from database
 * send each data to Candidate.jsx
 */

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Components
import Candidate from '../components/Candidate';

// Local Data
import sampleData from "../sampleData";

const CandidateList = () => {
  return(
    <Container>
      <Row>
        {
          /* Iterating Data */
          sampleData.map( (data) => (
            <Col>
              <Candidate user={data}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default CandidateList;
