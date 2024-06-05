import { Link } from "react-router-dom";
import "./comanda.css";
import SimpleTable from "../Table/Table";
function Comanda() {
  return (
    <div className="container">
        
      <div className="esquerda">
      <h1 className="titulo">Comanda</h1>
      <input className='inputs01' placeholder='Produto' />
        <Link to="/Menu" className="adicionarProduto">
         Adicionar produto
        </Link>
      </div>
      <div className="direta">
        <h1 className="titulo">Itens</h1>
      <SimpleTable></SimpleTable>
      </div>
    </div>
  );
}

export default Comanda;
