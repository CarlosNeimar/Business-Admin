import React, { useState } from 'react'
import '../Novonegocio-tipo/Novo.css'

function formatarCNPJ(cnpj) {
  const cnpjLimpo = cnpj.replace(/[^\d]/g, '');
  return cnpjLimpo.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5'
  );
}

const Feito = () => {

  const [cnpj, setCnpj] = useState('');

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.slice(0, 14);
    const cnpjFormatado = formatarCNPJ(inputValue);
    setCnpj(cnpjFormatado);
  };

  return (
    <div className='cardform'>
        <section className='infoprin'>
            <form>
                <h2>Primeiros passos</h2>
                <ul>
                    <li>
                        <label>Nome da Empresa:</label>
                        <input type="text" id="nome" name="nome" required />
                    </li>
                    <li>
                        <label>Cnpj:</label>
                        <input type="text" id="cnpj" name="cnpj" value={cnpj} onChange={handleInputChange} required />
                    </li>
                    <li>
                        <label>E-mail:</label>
                        <input type="email" id="email" name="email" required />
                    </li>
                </ul>
            </form>
        </section>
        <section className='infosec'>
            <form>
                <h2>Tipo de negocio:</h2>
                <ul>
                    <div className="virtpres">
                        <input type="radio" name="select" id="option-1" />
                        <input type="radio" name="select" id="option-2" />
                        <label htmlFor="option-1" className="option option-1">
                            <div className="dot"></div>
                            <span>Virtual</span>
                        </label>
                        <label htmlFor="option-2" className="option option-2">
                            <div className="dot"></div>
                            <span>Presencial</span>
                        </label>
                    </div>
                    <li>
                        <label>Segmento Empresarial:</label>
                        <select name="segmento" id="segmento">
                            <option disabled>Selecione o segmento</option>
                        </select>
                    </li>
                    <li>
                    <button className="continue-application">
                            <div>
                                <div className="pencil"></div>
                                <div className="folder">
                                    <div className="top">
                                        <svg viewBox="0 0 24 27">
                                            <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                                        </svg>
                                    </div>
                                    <div className="paper"></div>
                                </div>
                            </div>
                            Gerenciar Negocio
                        </button>


                    </li>
                </ul>
            </form>
        </section>
        
    </div>
)
}

export default Feito
