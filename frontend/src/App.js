/* 
 * HOMEPAGE Of Appl cation
 */
import { Outlet }    from 'react-router-dom';

// Local Files
import Header        from './components/Header';
import Footer        from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
