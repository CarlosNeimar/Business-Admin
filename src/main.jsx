import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Router

import{ createBrowserRouter, RouterProvider} from "react-router-dom";

// Paginas
import Home from './routes/Home.jsx';
import Dashboard from './routes/Dashboard.jsx';
import ErroPage from './routes/Erropage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />, // Pagina 404
    children:[    
      {
        path: "/",
        element: <Home />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
