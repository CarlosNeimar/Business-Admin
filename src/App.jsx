import './App.css'
import Navbar from './layout/Navbar';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div>
        < Navbar />
        <h1>Business Admin</h1>
        <Outlet />
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
