import React, { useState, useEffect } from 'react';
import { IoSettings } from 'react-icons/io5';
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { Temas } from '../components/temas';

import './Config.css';

const Config = ({ isVisible, toggleVisibility, isdark, setisdark}) => {
  const componentClass = isVisible ? 'Cardconfig' : 'hidden';




  return (
    <div>
      <div className={componentClass}>
        <div className="cardcontainer">
          <div className='configtitle'>
          <h1>
            Configurações <IoSettings className="configicon" />
          </h1>
          </div>
          <div className='temas'>
              <h2>Temas:</h2>
              <div className="escolhatema">
                {/* <input type="radio" name='temas' id='claro' />
                <label htmlFor="tema-claro">
                <span>  
                Tema claro
                <MdSunny />
                </span>
                </label>
                <input type="radio" name='temas' id='escuro' />
                <label htmlFor="tema-escuro">
                 <span>
                Tema escuro
                <FaCloudMoon />
                 </span>
                  </label> */}
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
    </div>
  );
};

export default Config;
