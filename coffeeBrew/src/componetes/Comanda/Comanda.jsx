import { Link } from "react-router-dom";
import "./comanda.css";
import SimpleTable from "../Table/Table";
function Comanda() {
  return (
    
    <div className="backGround">
      <div  className="conteinerComanda">
      

        <div className="comandas">
        <h1 className="titulo">Comanda</h1>
          <Link to="/Menu" className="adicionarProduto">
            Comanda 1
          </Link>
          <Link to="/Menu" className="adicionarProduto">
            Comanda 2
          </Link>
          <Link to="/Menu" className="adicionarProduto">
            Comanda 3
          </Link>
        </div>
        <div className="direta">
          <h1 className="titulo">Pedidos Comanda 1</h1>
          <SimpleTable></SimpleTable>
          <Link to="/Menu" className="adicionarProduto">
           Pagar
          </Link>
        </div>
      </div>
      </div>
   
  );
}

export default Comanda;
