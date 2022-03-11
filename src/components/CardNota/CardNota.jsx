import React, { Component } from "react";
import "./style.css";

class CardNota extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_h3">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_p">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
