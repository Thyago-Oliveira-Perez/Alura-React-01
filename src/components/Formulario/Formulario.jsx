import { Component } from "react";
import "./style.css";

class Formulario extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.texto = "";
    this.state = { categorias: [] };
    this._novaCategoria = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novaCategoria);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novaCategoria);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  /*
  aqui eu estou atribuindo valor ao atributo titulo
  atraves do this.titulo = evento.target.value;
  */
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  /*
  aqui eu estou atribuindo valor ao atributo texto
  atraves do this.texto = evento.target.value;
  */
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  /*
  aqui eu estou passando o valor de titulo e texto, antes pegos
  pelas outras funções handle, para o props.criarNota pelo
  this.props.criarNota. As props são propriedades
  herdadas dos componente pais, nesse caso o App.js,
  que neste caso é a propriedade(props) "criarNota".
  */
  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="formulario" onSubmit={this._criarNota.bind(this)}>
        <div
          onChange={this._handleMudancaCategoria.bind(this)}
          className="formulario_input-select"
        >
          <label>Categorias</label>
          <select>
            <option>Sem Categoria</option>
            {this.state.categorias.map((categoria, index) => {
              return <option key={index}>{categoria}</option>;
            })}
          </select>
        </div>

        <div className="formulario_input">
          <label className="formulario_nome-tarefa">Titulo da Tarefa</label>
          <input
            type="text"
            placeholder="Título"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
        </div>
        <textarea
          className="formulario_textarea"
          rows={15}
          placeholder="Descreva a sua atividade"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="formulario_button">Criar Nota</button>
      </form>
    );
  }
}

export default Formulario;
