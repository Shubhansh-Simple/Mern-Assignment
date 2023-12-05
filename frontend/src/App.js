/* 
 * HOMEPAGE Of Application
 */
import { Outlet }    from 'react-router-dom';

// Local Files
import Header        from './components/HeaderComp';
import Footer        from './components/FooterComp';

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
