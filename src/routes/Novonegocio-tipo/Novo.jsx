import React, { useState } from 'react';

import './Novo.css'

const Novo = () => {

    const [verba, setVerba] = useState('');


    const formatarVerba = (inputValue) => {
        const valorNumerico = inputValue.replace(/\D/g, '');
    
        if (valorNumerico === '') {
          setVerba('');
        } else {
          const valorFormatado = (parseFloat(valorNumerico) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          setVerba(valorFormatado);
        }
      };


    return (
        <div className='cardform'>
            <section className='infoprin'>
                <form>
                    <h2>Primeiros passos</h2>
                    <ul>
                        <li>
                            <label for="nome">Nome da Empresa:</label>
                            <input type="text" id="nome" name="nome" required />
                        </li>
                        <li>
                            <label for="verba">Verba:</label>
                            <input type="text" id="verba" name="verba" value={verba} onChange={(e) => formatarVerba(e.target.value)} required />
                        </li>
                        <li>
                            <label for="email">E-mail:</label>
                            <input type="email" id="email" name="email" required />
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
}

export default Novo
