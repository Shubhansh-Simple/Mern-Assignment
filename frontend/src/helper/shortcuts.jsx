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

export default ErrorMsg;


