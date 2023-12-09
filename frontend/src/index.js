/*
 * It's the router mapping file
 * like urls.py in django
 */

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
import HomeScreen   from './screens/HomeScreen';
import CandidateUpdate from './screens/CandidateUpdate';
import CandidateCreate from './screens/CandidateCreate';
import Practice         from './practice';


/* 
 * Consist all routes of our application
 * Router - Mapping URL with Pages 
 */
const router = createBrowserRouter(
  createRoutesFromElements(

    // Parent is App.js
    <Route path='/' 
          element={ <App /> }>

      {/* For practicing the react */}
      <Route path='practice'
             element={ <Practice /> } />

      {/* HomeScreen Page */}
      <Route index={true} 
             path='/' 
             element={ <HomeScreen /> }/>

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




