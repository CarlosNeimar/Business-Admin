import React from "react";
import "./Erropage.css"
import backgronderro from "../assets/Backgronds/Principal/404.png"
import { Link } from "react-router-dom";

const ErroPage = () =>{

    return(
        <div className="erropage">
            <div className="erroelements">
            <h1>Ops ...</h1>
            <h2>Seus investimentos não estão por aqui</h2>
            <div className="erroimg">
            <img src={backgronderro} alt="" width="1000"/>
            </div>
            <div className="retornar">
            <h3>Pagina não encontrada</h3>
            <Link className="button-66" href="/">Voltar</Link>
            </div>
            </div>
            </div>
        )
}

export default ErroPage