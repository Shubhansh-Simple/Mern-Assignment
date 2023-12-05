// React-bootstrap
import Button       from 'react-bootstrap/Button';
import Modal        from 'react-bootstrap/Modal';

// React-hooks
import { useState } from "react";

/*
 * Modal Popup Component
 * ( Are you sure want to do this ? ) 
 */
const DialogPopup = ( { visible, dialog} ) => {

  const [show, setShow] = useState(false);

  const handleClose     = ()=> setShow(false);
  const handleShow      = ()=> setShow(true);

  console.log('Is dialog popup reachable ? ');

  return(
    <>

    {/* Modal-Caller-Button */}
    { visible ? handleShow() : null }

      { /* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose}>

        {/* Modal-Header */}
        <Modal.Header closeButton>
          <Modal.Title>{dialog}</Modal.Title>
        </Modal.Header>

        {/* Modal-Footer */}
        <Modal.Footer>
          {/* Here we want the backend stuff 
            * Like - on click, call this backend function
            * which actually make changes to the database.
            */}
          <Button variant='danger'  onClick={handleClose}>
            Yes
          </Button>
          <Button variant='primary' onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default DialogPopup;



