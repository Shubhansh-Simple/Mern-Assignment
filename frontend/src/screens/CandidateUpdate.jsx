// React-Link
import { useParams }   from 'react-router-dom';

// Local
import CandidateForm from '../components/CandidateForm';
import ErrorMsg            from '../helper/shortcuts';
import sampleData          from '../sampleData';

/*
 * Candidate Update Page
 */
const CandidateUpdate = ()=> {

  // Get id from url
  const candidateId   = parseInt( useParams().id );

  // Get candidate from the database using id
  const candidate     =  sampleData.find( (eachCandidate) => eachCandidate._id===candidateId );

  // Error message for user doesn't exist
  const notFoundMsg   = "Candidate doesn't exist"

  /* For Update Form */
  const form = {
    'title'         :  `${candidate.first_name}'s Update Form`,
    'titleColor'    : 'text-secondary',
    'submitBtnText' : 'Update'
  }

  return (
    <>
      {
        candidate
          ?
        <CandidateForm candidate={candidate} form={form} />
          :
        <ErrorMsg msg={notFoundMsg} />
      }
    </>
  );
}
export default CandidateUpdate;



