import { Component } from "react";
import "./style.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novaListaCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novaListaCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novaListaCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleInput(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      let categoria = e.target.value;
      this.props.criarCategoria(categoria);
    }
  }

  render() {
    return (
      <section>
        <div className="input-categoria">
          <div>
            <label>Nome da Categoria</label>
            <input
              onKeyUp={this._handleInput.bind(this)}
              type="text"
              placeholder="Categoria"
            />
          </div>
        </div>

        <ul className="listaCategoria_lista">
          {this.state.categorias.map((categorias, index) => {
            return (
              <li className="listaCategoria_item" key={index}>
                {categorias}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeCategorias;
