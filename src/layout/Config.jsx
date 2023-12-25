import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";


import { Temas } from '../components/temas';

import './Config.css';

const Config = ({ isVisible, toggleVisibility, isdark, setisdark}) => {
  const componentClass = isVisible ? 'Cardconfig' : 'hidden';
  const closeConfig = () => {
    toggleVisibility();
  }; 

  return (
    <div>
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
              </div>
              <div className="links">
                <a href="">Criador</a>
                <a href="">Feedback</a>
                <a href="">Sobre</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
