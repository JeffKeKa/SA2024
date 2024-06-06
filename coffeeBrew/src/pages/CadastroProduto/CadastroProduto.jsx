import { Link, Outlet } from 'react-router-dom';
import './cadastroProduto.css';

function CadastroProduto () {

  return (  
    <div className='containerLogin'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                <p>Cadastrar produto</p>
            </div>
           
        </div>
        <div className='m_meio'>
            <input className='inputsCadastroProduto' placeholder='Nome' value={""} />
            <input className='inputsCadastroProduto' placeholder='Preço' />
            <input className='inputsCadastroProduto' placeholder='Descrição' />
            <input className='inputsCadastroProduto' placeholder='URL da foto' />
        </div>
        <div className='m_baixo'>
            <Link className='botaoCadastroProduto' to="/Inicio">Cadastrar</Link>
            
        </div>
      </div>
    </div>
  )
}

export default CadastroProduto;