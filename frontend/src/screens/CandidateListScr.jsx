// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Components
import CandidateCard from '../components/CandidateCardComp';

// Local Data
import sampleData from "../sampleData";

/*
 * Show Candidates List
 * by reading data from database
 */
const CandidateList = () => {

  return(
    <Container>
      <h1 className='text-danger'>Candidate List</h1>

      {/* data exist */}
      <Row>
        {
          /* Iterating Data */
          sampleData.map( (data) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <CandidateCard candidate={data}/>
            </Col>
          ))
        }
      </Row>

      {/* data doesn't exist */}
      { 
        sampleData.length < 1
          &&
        <h1 className='display-1 text-center py-5'>
          Oops,No Candidate Found!
        </h1>
      }
    </Container>
  );
};

export default CandidateList;
