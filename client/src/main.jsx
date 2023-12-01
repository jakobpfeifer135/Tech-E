import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




import Home from './pages/HomePage.jsx';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
      {
        index: true,
        element: <Home />,
      },
 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
