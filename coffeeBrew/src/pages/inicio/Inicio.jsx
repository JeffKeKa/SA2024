import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './inicio.css'
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
    <div className='containerInicio'>
      <div className='barraLateralInicio'>
      <img src="..\imagensProduto\imagensLogo\logoSemFundo.png"   className='logoInicio' /> 
        <Link to="/Menu" className="botoesInicio">Menu</Link>
        <Link to="/comanda" className="botoesInicio">Pagamento</Link>
        <Link to="/comanda" className="botoesInicio">Comanda</Link>
      </div>
      <div className='direitaInicio'>

        <div className="carousel-container">  
          <div className="carousel-slide" style={{ display: index === 0 ? 'block' : 'none' }}>
          <img src="https://3.bp.blogspot.com/-gEIxd4Q5pU4/UTFWax73A3I/AAAAAAABr94/3DIoxR_NfnI/s1600/fotos-e-im%C3%A1genes-de-granos-de-caf%C3%A9-y-taza-coffee-photos-9.jpg"   className='logo' /> 
          </div>
          </div>
          <div className="carousel-slide" style={{ display: index === 1 ? 'block' : 'none' }}>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/c3/1c/19/20170924-134626-largejpg.jpg"   className='logo' /> 
          </div>
          <div className="carousel-slide" style={{ display: index === 2 ? 'block' : 'none' }}>
          <img src="https://th.bing.com/th/id/OIP.0HRY6dUFgUyc1t-xyA1siAHaE8?rs=1&pid=ImgDetMain"   className='logo' /> 
          </div>
        
          </div>
        </div>

      
    
  )
}

export default Inicio;
