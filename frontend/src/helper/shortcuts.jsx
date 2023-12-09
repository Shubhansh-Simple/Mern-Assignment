/*
 * Write custom helper function and components 
 * for other modules
 */


/*
 * Return associated gender name for gender database value
 */
export const GenderDropDownValue = ( gender ) => {
  if ( gender === 1 )
    return 'Male';
  else if ( gender === 2 )
    return 'Female';
  else
    return 'Others'
}

/*
 * Ooops message, not found
 */
const ErrorMsg = ({msg}) => {
  return (
    <h1 className='display-1 text-center text-danger'>
      { msg }
      <br />
    </h1>
  );
}

export default ErrorMsg ;





