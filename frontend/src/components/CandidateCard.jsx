// React-bootstrap
import {Row, Col} from 'react-bootstrap';
import Table      from 'react-bootstrap/Table';
import Button     from 'react-bootstrap/Button';
import Card       from 'react-bootstrap/Card';
import Image      from 'react-bootstrap/Image';

// React-Link
import { Link }   from 'react-router-dom';

// React-icons
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrashFill }  from 'react-icons/bs';

// React-hooks
import { useState } from 'react';
import Modal        from 'react-bootstrap/Modal';

// Local
import { GenderDropDownValue } from '../helper/shortcuts';

/*
 * Each candidate UI-CARD component
 */
const Candidate = ({ candidate }) => {

  /* Full Name */
  const fullName     = candidate.first_name + ' ' + candidate.last_name;

  /* Gender Name */
  const genderName   = GenderDropDownValue( candidate.gender );

  /* Avaialable button color */
  const btnColor = candidate.available 
                      ? 
                   'bg-primary' 
                      : 
                   'bg-dark'


  const dialog = 'Are you sure ?'

  const [show, setShow] = useState(false);

  const handleClose     = ()=> setShow(false);
  const handleShow      = ()=> setShow(true);

  return (
    <>
      { /* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose}>

        {/* Dialog-Header */}
        <Modal.Header closeButton>
          <Modal.Title>{dialog}</Modal.Title>
        </Modal.Header>

        {/* Dialog-Footer */}
        <Modal.Footer>
          <Button variant='danger' onClick={handleClose}>
            Yes
          </Button>
          <Button variant='primary' onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>

      </Modal>

      {/* CARD */}
      <Card className='my-2 py-2 rounded bg-dark px-4'
            border='info'>

        {/* CARD HEADER */}
        <div className='text-center'>
            { /* Full name */ }
            <Card.Text as='h3'  
                       className='text-white'>
              <strong>{fullName}</strong>
            </Card.Text>

            { /* Domain */ }
            <Card.Text as='strong' 
                       className='text-warning'
                       style={{ fontSize : '13px' }}>
              ({candidate.domain})
            </Card.Text>
         </div>

        <hr className='text-white' />
        { /* CARD BODY */ }
        <Card.Body className='text-light'>

          <Row>
            <Col>
                { /* Avatar */ }
                <Image src={candidate.avatar}
                       className='img-fluid rounded-circle fluid'
                       alt='Profile Avatar'
                       style={{width: '90px', height: '130px'}}
                       roundedCircle 
                />
            </Col>

            <Col>
              { /* Table */ }
              <Table borderless variant='dark' style={{ fontSize:'15px' }}>

                <br/>
              
                { /* Gender */ }
                <tr>
                <Card.Text as='strong'>
                  <td><strong className='text-warning'>Gender</strong></td>
                  <td>{genderName}</td>
                </Card.Text>
                </tr>

                { /* Avaialability */ }
                <tr>
                  <Card.Text as='small' >
                    <td>
                      <div className='form-switch form-check'>
                        <label className='form-check-label' 
                               for='flexSwitchCheckChecked'>
                          <strong className='text-info'> : Available</strong>
                        </label>

                        <input className={`form-check-input ${btnColor}`}
                               type='checkbox' 
                               id='flexSwitchCheckChecked' 
                               checked 
                        />
                      </div>
                    </td>
                  </Card.Text>
                </tr>

              </Table>
            </Col>
          </Row>

          <div className='text-center'>
            <small className='text-warning'>Mail ID</small>
            <br />
            <strong>{candidate.email}</strong>
          </div>

        </Card.Body>


        { /* CARD FOOTER */ }
        <Card.Footer style={{ display : 'flex' }}>

          { /* Update button */ }
          <Link to={`/candidate/${candidate._id}/update`} >
            <Button variant='primary' 
                    size='sm' >
              <BsFillPencilFill /> Edit
            </Button>
          </Link>

          { /* Delete button */ }
          <Button variant='danger' 
                  size='sm' 
                  onClick={handleShow}
                  style={{ marginLeft: 'auto' }} >
            <BsFillTrashFill /> Danger
          </Button>

        </Card.Footer>

      </Card>
    </>
  )
}

export default Candidate;







