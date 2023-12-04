/*
 * UI Card of a user
 */

// React-bootstrap
import Table  from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card   from 'react-bootstrap/Card';
import Image  from 'react-bootstrap/Image';

// React-icons
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill }  from "react-icons/bs";

/*
 * CARDS UI component of each user from getAllCandidate()
 */
const Candidate = ({ user }) => {
  return (
      
    /* CARD HEADER */
    <Card className='my-1 py-2 rounded bg-dark'
          border='info'>

      { /* First table (1/2) */ }
      <Table variant='dark'>
        <tr>
          <td>
            { /* Avatar */ }
            <Image src={user.avatar}
                   class='img-fluid rounded-circle mb-2'
                   alt='Profile Avatar'
                   style={{width: '90px', height: '110px'}}
                   roundedCircle />
          </td>

          <td>
            { /* Full name */ }
            <tr className='text-center bg-dark'>

              <Card.Text as='p'  
                         style={{ fontSize : '22px'}}
                         className='text-white'>
                <p>{user.first_name} {user.last_name}</p>
              </Card.Text>
            </tr>

            { /* Domain */ }
            <tr className='text-center bg-dark text-warning'>
              <Card.Text as='strong' 
                         style={{ fontSize : '12px' }}>
                ({user.domain})
              </Card.Text>
            </tr>
          </td>
        </tr>
      </Table>
      

      { /* CARD BODY */ }
      <Card.Body className='text-light'>
        
        { /* Second Table (2/2) */ }
        <Table  variant='dark' style={{ fontSize:'15px' }}>
        
          { /* Email */ }
          <tr>
            <Card.Text as='small'>
              <td><strong class='text-warning'>Email  </strong></td>
              <td>{user.email}</td>
            </Card.Text>
          </tr>

          { /* Gender */ }
          <tr>
          <Card.Text as='small'>
            <td><strong class='text-warning'>Gender : </strong></td>
            <td>{user.gender}</td>
          </Card.Text>
          </tr>

          { /* Avaialability */ }
          <tr>
            <Card.Text as='small' >
              <td>
                <div class="form-switch form-check">
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    <strong class='text-warning'> : Available</strong>
                  </label>
                  {
                    user.available 
                      ?
                  <input class="form-check-input bg-primary"  
                         type="checkbox" 
                         id="flexSwitchCheckChecked" 
                         checked 
                  />
                    :
                  <input class="form-check-input bg-dark"  
                         type="checkbox" 
                         id="flexSwitchCheckChecked" 
                         disabled
                         checked 
                  />
                  }
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
        <Button variant='danger' size='sm' style={{ marginLeft: 'auto' }} >
          <BsFillTrashFill /> Danger
        </Button>

      </Card.Footer>

    </Card>
  )
}

export default Candidate;







