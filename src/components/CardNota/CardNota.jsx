import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteSvg } from "../../assets/img/delete.svg";

class CardNota extends Component {
  constructor(props) {
    super(props);
  }

  /*
  aqui eu estou recebendo o index que passei anteriormente no componente
  ListaDeNotas e passando ele como parametro da função deletarNota() 
  que veio lá do componente App.js
  */
  apagarNota() {
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <h4>{this.props.categoria}</h4>
        <header className="card-nota_header">
          <h3 className="card-nota_h3">{this.props.titulo}</h3>
          <DeleteSvg onClick={this.apagarNota.bind(this)} />
        </header>
        <p className="card-nota_p">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
