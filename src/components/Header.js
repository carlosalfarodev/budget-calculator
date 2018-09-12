import React, { Component } from "react";
import logo from "../logo.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Porcentage de Gastos Basado a su Ingreso</h1>
        <p>Solamente Son Recomendaciones</p>
      </header>
    );
  }
}

export default Header;
