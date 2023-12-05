// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Components
import CandidateCard from '../components/CandidateCardComp';

// Local Data
import sampleData from '../sampleData';
import ErrorMsg   from '../helper/shortcuts';

/*
 * Show Candidates List
 * by reading data from database
 */
const CandidateList = () => {

  const notFoundMsg   = 'Oops, No candidate found!'

  return(
    <Container>
      <br />
      <br />

      {/* data exist */}
      <Row>
        {
          /* Iterating Data */
          sampleData.map( (data) => (
            <Col sm={12} 
                 md={6} 
                 lg={4} 
                 xl={3}>
              <CandidateCard candidate={data}/>
            </Col>
          ))
        }
      </Row>

      {/* data doesn't exist */}
      { 
        sampleData.length < 1
          &&
        <ErrorMsg msg={notFoundMsg} />
      }
    </Container>
  );
};

export default CandidateList;
