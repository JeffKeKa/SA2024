import './cardMenu.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardMenu() {
  // const [produtos, setProdutos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8010/coffebrew/produto');
  //       setProdutos(response.data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // return (
  //   <div>
  //     {produtos.map(produto => (
  //       <div key={produto.id} className='cardProduto'>
  //         <div className='cardProdutoImagem colorCafe'>
  //           <img src="./imagensProduto/imagensCafe/produtoCafeAmericano.jpg" className='logo' alt={produto.nome} />
  //         </div>
  //         <div className='cardProdutoTexto'>
  //           <h1 className='nomeProduto'>{produto.nome}</h1>
  //           <h5 className='descricaoProduto'>{produto.descricao}</h5>
  //           <div className='preço'>
  //             <h1 className='valorProduto'>{produto.preco}</h1>
  //             <button className='adicionarProduto'>Comprar</button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );


  // card Produto sem backend
  return (
    <div className='cardProduto'>
    
        <div className='cardProdutoImagem colorCafe'>
        <img src="./imagensProduto\imagensCafe\produtoCafeAmericano.jpg"  className='logo' />
        </div>

      <div className='cardProdutoTexto'> 

         <h1 className='nomeProduto'>CAFÉ AMERICANO</h1>
         <h5 className='descricaoProduto'>O café americano é uma bebida feita diluindo-se espresso em água quente, resultando em uma xícara suave e menos concentrada do que o espresso puro.</h5>
         <h1 className='valorProduto'>R$30,00</h1>
         <button  className='adicionarProduto'>Comprar</button>

      </div>

    </div>
  );
}