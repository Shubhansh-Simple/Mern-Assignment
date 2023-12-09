// React-Link
import { Link }   from 'react-router-dom';

// React-Bootstrap
import { Form, 
         Dropdown,
         Row, 
         Col, 
         Button, 
         Container } from 'react-bootstrap';

/*
 * Candidate Form Page - Create & Update
 */
const CandidateForm = ( {candidate, form } ) => {

  /* Exist Candidate 
   * Leads us to PUT request
   * otherwise to POST request
   */
  const candidateExist = Object.keys(candidate).length > 0
  console.log('Candidate Exist - ',candidateExist);

  /* Default Values For Create Form */
  let first_name_val = '';
  let last_name_val  = '';
  let email_val      = '';
  let available_val  = '';

  /* Values For Update Form */
  if ( candidateExist ){
    first_name_val = candidate.first_name;
    last_name_val  = candidate.last_name;
    email_val      = candidate.email;
    available_val  = candidate.available ? 'checked' : '' ;
  }


  return (

    <Container className='bg-light px-3'>

      {/* Form Title */}
      <br />
      <h4 className={`display-1 text-center ${ form.titleColor }`}>
        <strong>
          { form.title }
        </strong>
        <br />
        <br />
      </h4>

      {/* Form */}
      <Form>

        <Row>

          {/* First Name Input */}
          <Col>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label><b>First Name</b></Form.Label>
              <Form.Control type='text' 
                            placeholder='Your First Name' 
                            value={first_name_val} />
            </Form.Group>
          </Col>


          {/* Last Name Input */}
          <Col>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label><b>Last Name</b></Form.Label>
              <Form.Control type='text' 
                            placeholder='Your Last Name'
                            value={last_name_val} />
            </Form.Group>
          </Col>
        </Row>


        {/* Email Input */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control type='email' 
                        placeholder='name@example.com'
                        value={email_val} />
        </Form.Group>


        {/* Gender Input */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>
            <b>Gender</b>
            <br />
          </Form.Label>
            <br />
          <Form.Check
            inline
            label='Male'
            type='radio'
            name='group1'
            className='col-form-label-lg'
            id='inline-radio-1'
          />
          <br />
          <Form.Check
            inline
            label='Female'
            type='radio'
            name='group1'
            className='col-form-label-lg'
            id='inline-radio-2'
          />
        </Form.Group>
     

        {/* Domain Input */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label><b>Profession</b></Form.Label>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Domain
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sales</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Manager</Dropdown.Item>
                <Dropdown.Item href="#/action-3">I.T.</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Finance</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Marketting</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Form.Group>

        {/* Avaialability  Input*/}
        <br />
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Check
            type='switch'
            id='custom-switch'
            label='Available'
            checked={available_val}
            className='col-form-label-lg'
          />
        </Form.Group>
        <br />
        <br />
      </Form>

      {/* Submit Buttons */}
      <div className='text-center'>
        <Row>
          <Col>
            <Link to='/'>
              <Button variant='danger' size='lg'>
                { form.submitBtnText }
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to='/'>
              <Button variant='primary' size='lg'>
                 Back
              </Button>
            </Link>
          </Col>
        </Row>
      </div>

      <br />
      <br />
    </Container>
  );
}

export default CandidateForm;





