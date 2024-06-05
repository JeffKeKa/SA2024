import React from "react";
import "./table.css";

class SimpleTable extends React.Component {
  render() {
    return (
      <table className="simple-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exporesso</td>
            <td>R$10.00</td>
          </tr>
          <tr>
            <td>Cafe com leite</td>
            <td>R$10.00</td>
          </tr>
          <tr>
            <td>Chá</td>
            <td>R$10.00</td>
          </tr>
          <tr>
            <td>Coxinha</td>
            <td>R$10.00</td>
          </tr>
          <tr>
            <td>Bolo</td>
            <td>R$10.00</td>
          </tr>
          
        </tbody>
      </table>
    );
  }
}

export default SimpleTable;
