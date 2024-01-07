import "./Novotype.css"
import React, { useState } from "react";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdOutlineAddBusiness } from "react-icons/md";
import Form from "../Novonegocio-tipo/Form";




const Novotype = ({ isdark, setisdark }) => {

    const [existencia, setexistencia] = useState(3);

    const negocioexistente = () => {
        setexistencia(1);
        setTimeout(scrollpagina, 100);
        }

    const negocionaoexistente = () => {
        setexistencia(2);
        setTimeout(scrollpagina, 100);
        }

    const scrollpagina = () => {
        window.scrollTo({
            top: 650,
            behavior: 'smooth',
          });
    }

    

    return (
        <div data-tema={isdark ? "dark" : "light"}>
            <div className="novonegocio">
                <div className="contentnew">
                    <div className="ops">
                        <div className="titlenew">
                            <h1>O seu negocio já existe ?</h1>
                        </div>
                        <div className="artnegocios">
                            <button className="nochange" onClick={negocioexistente}>
                            <div className="cardnegocios">
                                <div className="titlecard">
                                    <div className="cabecalhocard">
                                        <h2>Sim!</h2>
                                        <h3>Quero apenas gerenciá-lo</h3>
                                        <div className="iconscreate">
                                            <LiaBusinessTimeSolid className="iconetype" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </button>
                            <button className="nochange" onClick={negocionaoexistente}>
                            <div className="cardnegocios">
                                <div className="titlecard">
                                    <div className="cabecalhocard">
                                        <h2>Não!</h2>
                                        <h3>Quero criá-lo do zero</h3>
                                        <div className="iconscreate">
                                            <MdOutlineAddBusiness className="iconetype" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Form existencia={existencia} setexistencia={setexistencia}/>
        </div>
    )


}


export default Novotype