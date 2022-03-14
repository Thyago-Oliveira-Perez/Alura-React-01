import ListaDeNotas from "./components/ListaDeNotas";
import Formulario from "./components/Formulario";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import { Component } from "react";
import "./assets/app.css";
import "./assets/index.css";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <div className="conteudo">
        {/* aqui eu estou passando essa funcao criar nota para o componente Formulario */}
        <Formulario
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.criarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            deletarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
            categorias={this.categorias.categorias}
          />
        </main>
      </div>
    );
  }
}

export default App;
