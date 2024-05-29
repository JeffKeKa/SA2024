import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './style.css'
function Inicio () {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (  
    <div className='container'>
      <div className='esquerda'>
      <Link to="/Menu" className="adicionarProduto">Menu</Link> 
      <Link to="/comanda" className="adicionarProduto">Pagamento</Link> 
      <Link to="/comanda" className="adicionarProduto">Comanda</Link> 

      </div>
      <div className='direita'>

        <div className="carousel-container">  
          <div className="carousel-slide" style={{ display: index === 0 ? 'block' : 'none' }}>
          <img src="./imagensProduto\imagensLogo\logo.png"   className='logo' /> 
          </div>
          </div>
          <div className="carousel-slide" style={{ display: index === 1 ? 'block' : 'none' }}>
          <img src="./imagensProduto\imagensLogo\logoSemFundo.png"   className='logo' /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 2 ? 'block' : 'none' }}>
          <img src="./imagensProduto\imagensLogo\logo.png"   className='logo' /> 
          </div>
        
          </div>
        </div>

      
    
  )
}

export default Inicio;
