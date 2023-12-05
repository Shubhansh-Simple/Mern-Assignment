// React-Bootstrap
import { Form,Button } from 'react-bootstrap';

// Local
import sampleData from '../sampleData';

/*
 * Show Candidates Edit Page
 * to update it's information
 */
const CandidateUpdate = ( {_id} )=> {

  // Get the candidate from the database using the id
  const candidate = candidate.find( () );
  const notFound  = "Candidate doesn't exist"

  return (
    <>
    {
      !candidate
        ?
      <h1 className='text-danger display-1'>
        {notFound}
      </h1>
        :
      <h1>Candidate id is {candidate.first_name}</h1>
    }
    </>
  );
}
