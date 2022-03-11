import ListaDeNotas from "./components/ListaDeNotas";
import Formulario from "./components/Formulario";
import { Component, useState } from "react";
import "./assets/app.css";
import "./assets/index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {
      titulo,
      texto,
    };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="conteudo">
        {/* aqui eu estou passando essa funcao criar nota para o componente Formulario */}
        <Formulario criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </div>
    );
  }
}

export default App;
