// React-bootstrap
import Table  from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card   from 'react-bootstrap/Card';
import Image  from 'react-bootstrap/Image';

import {Row, Col} from 'react-bootstrap';

// React-icons
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrashFill }  from 'react-icons/bs';

// React-hooks
import { useState } from 'react';
import Modal        from 'react-bootstrap/Modal';

// Local
//import DialogPopup from './DialogPopupComp';

/*
 * Each candidate UI-CARD component
 */
const Candidate = ({ candidate }) => {

  /*
   * Full Name
   */
  const fullName = candidate.first_name 
                      + ' ' + 
                   candidate.last_name;

  /* 
   * Avaialability button color 
   */
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

        {/* Modal-Header */}
        <Modal.Header closeButton>
          <Modal.Title>{dialog}</Modal.Title>
        </Modal.Header>

        {/* Modal-Footer */}
        <Modal.Footer>

          <Button variant='danger' onClick={handleClose}>
            Yes
          </Button>
          <Button variant='primary' onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>

      </Modal>

      {/* CARD HEADER */}
      <Card className='my-2 py-2 rounded bg-dark px-4'
            border='info'>

        { /* First table (1/2) */ }
        <Row>
          <Col>
              { /* Avatar */ }
              <Image src={candidate.avatar}
                     className='img-fluid rounded-circle fluid mb-2'
                     alt='Profile Avatar'
                     style={{width: '90px', height: '110px'}}
                     roundedCircle />
          </Col>
          <Col>
            <Table variant='dark'>
              { /* Full name */ }
              <tr className='text-center bg-dark'>
                <td>
                  <Card.Text as='p'  
                             style={{ fontSize : '20px'}}
                             className='text-white'>
                    <p>{fullName}</p>
                  </Card.Text>
                </td>
              </tr>

              { /* Domain */ }
              <tr className='text-center'>
                <td>
                  <Card.Text as='strong' 
                             className='text-warning'
                             style={{ fontSize : '13px' }}>
                    ({candidate.domain})
                  </Card.Text>
                </td>
              </tr>
            </Table>
          </Col>
        </Row>
      

        { /* CARD BODY */ }
        <Card.Body className='text-light'>
          
          { /* Second Table (2/2) */ }
          <Table  variant='dark' style={{ fontSize:'15px' }}>
          
            { /* Email */ }
            <tr>
              <Card.Text as='small'>
                <td>
                  <Row>
                    <Col>
                      <strong className='text-warning'>Email : </strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>{candidate.email}</strong>
                    </Col>
                  </Row>
                </td>
              </Card.Text>
            </tr>

            { /* Gender */ }
            <tr>
            <Card.Text as='small'>
              <td><strong className='text-warning'>Gender : </strong></td>
              <td>{candidate.gender}</td>
            </Card.Text>
            </tr>

            { /* Avaialability */ }
            <tr>
              <Card.Text as='small' >
                <td>
                  <div className='form-switch form-check'>
                    <label className='form-check-label' for='flexSwitchCheckChecked'>
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
        </Card.Body>

        { /* CARD FOOTER */ }
        <Card.Footer style={{ display : 'flex' }}>

          { /* Update button */ }
          <Button variant='primary' size='sm' >
            <BsFillPencilFill /> Edit
          </Button>

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







