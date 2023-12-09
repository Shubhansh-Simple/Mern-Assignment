/* 
 * Base Template Of Application
 */

import { Outlet }    from 'react-router-dom';

// Local Files
import Header        from './components/Header';
import Footer        from './components/Footer';

/*
 * Router uses the outlet ( index.js )
 * like which component need to show
 * there
 */
const App = () => {
  return (
    <>
      <Header />

      {/* From router path */}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;
