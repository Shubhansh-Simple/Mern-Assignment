// React
import React    from 'react';
import ReactDOM from 'react-dom/client';

// React Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';


// Css file
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import reportWebVitals from './reportWebVitals';

// Local Files
import App             from './App';
import CandidateList   from './screens/CandidateList';
import CandidateUpdate from './screens/CandidateUpdate';


/* Router - Mapping URL with Pages */
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={ <App /> }>

      {/* Candidates List Page */}
      <Route index={true} 
             path='/' 
             element={ <CandidateList /> }/>

      {/* Candidate Update Page */}
      <Route path='candidate/:id/update'     
             element={ <CandidateUpdate /> }/>

    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();




