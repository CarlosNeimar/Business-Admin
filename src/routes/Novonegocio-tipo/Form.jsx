import './Form.css'
import Novo from './Novo';
import Feito from './Feito';
const Form = ({ existencia, setexistencia}) => {

    return (<>
        <div className="formneg">
        {existencia === 1 && (
        <div className='areaform'>
        <div className="titel">
          <h1>Como é o seu neogcio ?</h1>
          <div className="formularionegocio">
            <Feito />
          </div>
          </div>
        </div>
      )}

      {existencia === 2 && (
        <div className='areaform'>
        <div className="title">
          <h1>Vamos criar seu negocio !</h1>
          </div>
          <div className="formularionegocio">
            <Novo />
          </div>
        </div>
      )}
        </div>
    </>)


}

export default Form;

