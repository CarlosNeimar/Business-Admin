import { Link } from "react-router-dom"
import React, { useState } from 'react';
import './Navbar.css'
import logo from '../assets/Logos/Logo-semfundo-G.png'


//Config
import Config from "./Config";

// Logos
import { BiSolidBusiness } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { MdAddBusiness } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";





const Navbar = ({isdark, setisdark} ) => {


  const [isConfigVisible, setIsConfigVisible] = useState(false);




  const toggleConfigVisibility = () => {
    setIsConfigVisible(!isConfigVisible);
  };

    return(
        <>
        <nav data-tema={isdark ? "dark" : "light"}>
            <ul>
                <li>
                    <Link className="logo opcoes" to="/">
                   <img src={logo} alt="Business Admin" width="200px"/>
                   <span>Busness Admin</span>
                   </Link>
                 </li>
                 <li>  
                  <Link className="opcoes" to="/dashboard"><BiSolidBusiness className="icone"/> <span className="nav-item">Dashboard</span></Link>
                </li>
                <li>
                  <Link className="opcoes" to="/dashboard"><MdManageAccounts className="icone"/><span className="nav-item">Profile</span></Link>
                </li>
                <li>
                  <Link className="opcoes" to="/Novonegocio"> <MdAddBusiness className="icone"/><span className="nav-item">Novo negocio</span></Link>
                </li>
                <li>
                  <Link className="opcoes" to="/dashboard"><FaChartLine className="icone"/><span className="nav-item">Análise</span></Link>
                </li>
                <li>
                  <a className="opcoes" onClick={toggleConfigVisibility}><IoSettings className="icone"/><span className="nav-item">Configurações</span></a>
                </li>
                <li>

                <Link className="opcoes maisopc" to="/dashboard"> <CiCircleMore className="icone"/><span className="nav-item">Mais</span></Link>
                </li>
            </ul>
        </nav>

        <Config isVisible={isConfigVisible}
         toggleVisibility={toggleConfigVisibility} isdark={isdark} setisdark={setisdark}/>
        </>
    )

}

export default Navbar