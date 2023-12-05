// React-Bootstrap
import { Form,Button } from 'react-bootstrap';
import { useParams }   from 'react-router-dom';

// Local
import sampleData from '../sampleData';

/*
 * Candidate Update Page
 */
const CandidateUpdate = ()=> {

  // Get id from url
  const candidateId = parseInt( useParams().id );

  // Get candidate from the database using the id
  const candidate     =  sampleData.find( ( eachCandidate ) => eachCandidate._id===candidateId );

  const notFoundMsg   = "Candidate doesn't exist"

    //const fullName  = candidate.first_name + ' ' + candidate.last_name;

  return (
    <>
      {
        candidate
          ?
        <h1 className='text-danger display-1 text-center'>
          <strong>
            {candidate.first_name} { candidate.last_name }
          </strong>
        </h1>
          :
        <h1 className='text-danger text-center display-1'>
          {notFoundMsg}
        </h1>
      }
    </>
  );
}
export default CandidateUpdate;



