// Local
import CandidateForm from '../components/CandidateForm';

/*
 * Candidate Create Page
 */
const CandidateCreate = () => {

  /* For Create Form */
  const form = {
    'title'         : 'Add New Candidate',
    'titleColor'    : 'text-success',
    'submitBtnText' : 'Create'
  }

  return (
    <CandidateForm candidate={{}} form={form} />
  );
}

export default CandidateCreate;







