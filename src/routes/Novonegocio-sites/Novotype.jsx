import "./Novotype.css"
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdOutlineAddBusiness } from "react-icons/md";


const Novotype = ({isdark, setisdark}) => {

    return(
        <div data-tema={isdark ? "dark" : "light"}>
        <div className="novonegocio">
        <div className="contentnew">
        <div className="ops">
        <div className="titlenew">
            <h1>O seu negocio já existe ?</h1>
        </div>
        <div className="artnegocios">
        <div className="cardnegocios">
            <div className="titlecard">
            <div className="cabecalhocard">
            <h2>Sim!</h2>
            <h3>Quero apenas gerenciá-lo</h3>
            <div className="iconscreate">
            <LiaBusinessTimeSolid className="iconetype"/>
            </div>
            </div>
            </div>
        </div>
        <div className="cardnegocios">
        <div className="titlecard">
            <div className="cabecalhocard">
            <h2>Não!</h2>
            <h3>Quero criá-lo do zero</h3>
            <div className="iconscreate">
            <MdOutlineAddBusiness className="iconetype"/>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )


}

export default Novotype