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
import CandidateCreate from './screens/CandidateCreate';


/* 
 * Consist all routes of our application
 * Router - Mapping URL with Pages 
 */
const router = createBrowserRouter(
  createRoutesFromElements(

    // Parent is App.js
    <Route path='/' element={ <App /> }>

      {/* Candidates List Page */}
      <Route index={true} 
             path='/' 
             element={ <CandidateList /> }/>

      {/* Candidate Create Page */}
      <Route path='candidate'     
             element={ <CandidateCreate /> }/>

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




