import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";




import { Temas } from '../components/temas';

import './Config.css';


const Config = ({ isVisible, toggleVisibility, isdark, setisdark}) => {
  const componentClass = isVisible ? 'Cardconfig' : 'hidden';
  const closeConfig = () => {
    toggleVisibility();
  }; 

  

  return (
    <div data-tema={isdark ? "dark" : "light"}>
      <div className={componentClass}>
        <div className="cardcontainer">
          <div className='configtitle'>
          <h1>
            Configurações
          </h1>
          <button className='botaoX' onClick={closeConfig}><IoCloseOutline className="configicon" /></button>
          </div>
              <div className="escolhatema">
                <span>Tema escuro</span>
                <Temas ischecked={isdark} heandlechange={() => setisdark(!isdark)} />
              </div> // setisdark=
              <div className="links"> 
                <ul>
                <li className='lipers'>
                <a href=""><FaArrowUpRightFromSquare /> GitHub <FaGithub /></a>
                </li>
                <li className='lipers'>
                <a href=""><FaArrowUpRightFromSquare /> Linkedin <CiLinkedin /></a>
                </li>
                <li className='lipers'>
                <a href=""><FaArrowUpRightFromSquare /> Sobre <FaQuestion /></a>
                </li>
                </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
