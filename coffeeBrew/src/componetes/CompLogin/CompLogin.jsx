import { Link, Outlet } from 'react-router-dom';
import './login.css';

function CompLogin () {

  return (  
    <div className='containerLogin'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                Bem-Vindo
            </div>
            <div className='c_baixo'>
                a COFFE BREW
            </div>
        </div>
        <div className='m_meio'>
            <input className='inputLogin' placeholder='Senha' />
            <input className='inputLogin' placeholder='Usuário' />
        </div>
        <div className='m_baixo'>
            <Link className='botao01' to="/Inicio">Entrar</Link>
         
        </div>
      </div>
    </div>
  )
}

export default CompLogin;