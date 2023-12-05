// React-Link
import { useParams }   from 'react-router-dom';

// Local
import CandidateUpdateForm from '../components/CandidateUpdateForm';
import ErrorMsg            from '../helper/shortcuts';
import sampleData          from '../sampleData';

/*
 * Candidate Update Page
 */
const CandidateUpdate = ()=> {

  // Get id from url
  const candidateId   = parseInt( useParams().id );

  // Get candidate from the database using the id
  const candidate     =  sampleData.find( (eachCandidate) => eachCandidate._id===candidateId );

  const notFoundMsg   = "Candidate doesn't exist"

  if ( candidate ){
    candidate['form_type'] = 'Update';
  }

  return (
    <>
      {
        candidate
          ?
        <CandidateUpdateForm candidate={candidate} />
          :
        <ErrorMsg msg={notFoundMsg} />
      }
    </>
  );
}
export default CandidateUpdate;



