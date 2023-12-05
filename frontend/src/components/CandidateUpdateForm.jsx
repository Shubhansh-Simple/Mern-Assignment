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
 * Candidate Update Form Page
 */
const CandidateUpdateForm = ( {candidate} ) => {
  return (
    <Container className='bg-light px-3'>
    <br />
    <br />

      <h4 className='text-secondary display-1 text-center'>
        <strong>
          {candidate.first_name}'s {candidate.form_type} Form
        </strong>
        <br />
        <br />
      </h4>

      {/* Update Form */}
      <Form>

        <Row>

          {/* First Name Input */}
          <Col>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label><b>First Name</b></Form.Label>
              <Form.Control type='text' placeholder='Your First Name' />
            </Form.Group>
          </Col>


          {/* Last Name Input */}
          <Col>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label><b>Last Name</b></Form.Label>
              <Form.Control type='text' placeholder='Your Last Name' />
            </Form.Group>
          </Col>
        </Row>


        {/* Email Input */}
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
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
                Submit
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

export default CandidateUpdateForm;





