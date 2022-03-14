import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
    this._novaNota = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novaNota);
  }

  componentWillUnmount(){
      this.props.notas.desinscrever(this._novaNota);
  }

  _novasNotas(novaNota) {
    this.setState({ ...this.state, novaNota });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                /*
              aqui eu passo o index do map como propriedade para o
              componente CardNota, desse modo cada CardNota agora possui
              um index
              */
                indice={index}
                deletarNota={this.props.deletarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
