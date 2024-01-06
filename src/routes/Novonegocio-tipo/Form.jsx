import './Form.css'
const Form = ({ existencia, setexistencia}) => {

    return (<>
        <div className="formneg">
        {existencia === 1 && (
        <div>
            <div className="titel">
          <h1>Como é o seu neogcio ?</h1>
          </div>
        </div>
      )}

      {existencia === 2 && (
        <div>
        <div className="title">
          <h1>Conteúdo Exibido</h1>
          </div>
        </div>
      )}
        </div>
    </>)


}

export default Form;

