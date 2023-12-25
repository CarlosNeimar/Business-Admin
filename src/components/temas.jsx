import "./temas.css"

export const Temas = ({ heandlechange, ischecked }) =>{

    return(
    <div className="troca-container">
        <input type="checkbox" id="check" className="trocando" onChange={heandlechange} checked={ischecked}/>
        <label htmlFor="check">Dark mode</label>
    </div>
    )
}