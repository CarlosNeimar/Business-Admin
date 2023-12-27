import "./Homes.css"
import logo from '../../assets/Logos/Logo-semfundo-G.png'

const Start = () =>{
    return(
        <section className="inicio">
            <div className="textos">
            <h2>Administrador de </h2>
            <h1>Negocios</h1>
            </div>
            <div className="imgprin">
            <img src={logo} alt="logo" />
            </div>
        </section>
        
    )
}

export default Start