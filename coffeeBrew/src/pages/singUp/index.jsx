import { Link, Outlet } from 'react-router-dom';



function SingUp () {


  return (  
    <div className='container'>
      <div className='meio'>
        <div className='m_cima'>
            <div className='c_cima'>
                Cadastro
            </div>
            <div className='c_baixo'>
                a COFFE BREW
            </div>
        </div>
        <div className='m_meio'>
            <input className='inputs01' placeholder='Senha' />
            <input className='inputs01' placeholder='Usuário' />
        </div>
        <div className='m_baixo'>
            <Link className='botao01' to="/Inicio">cadastrar</Link>
           
        </div>
      </div>
    </div>
  )
}

export default SingUp;