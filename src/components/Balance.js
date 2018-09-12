import React, { Component } from "react";

class Balance extends Component {
  render() {
    let style = {
      color: this.props.total > -1 ? "green" : "red",
      fontSize: 35
    };

    return (
      <div>
        <h3>Total de Gastos</h3>
        <p style={style}>{`$${this.props.total.toFixed(2)}`}</p>
        <h3>Total %</h3>
        <p style={style}>{this.props.percentage.toFixed(2)}</p>
      </div>
    );
  }
}

export default Balance;
