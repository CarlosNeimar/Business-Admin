import "./temas.css"

export const Temas = ({ heandlechange, ischecked }) =>{

    

    return(
    <div className="troca-container">
        <input type="checkbox" id="toggle" className="trocando" onChange={heandlechange} checked={ischecked}/>
    </div>
    )
}