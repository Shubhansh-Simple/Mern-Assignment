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

// Local Files
import reportWebVitals from './reportWebVitals';
import App             from './App';
import CandidateList   from './screens/CandidateListScr';


/* Routers */
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={ <App /> }>
      <Route index={true} path='/' element={ <CandidateList /> }/>
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




