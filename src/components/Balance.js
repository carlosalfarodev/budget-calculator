import React, { Component } from "react";

class Balance extends Component {
  render() {
    let style = {
      color: this.props.percentage > 100 ? "red" : "green",
      fontSize: 24
    };

    function numberWithCommas(num) {
      num = num.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(num)) num = num.replace(pattern, "$1,$2");
      return num;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <span>Total de Gastos: </span>
            <span style={style}>{`$ ${numberWithCommas(
              this.props.total
            )}`}</span>
          </div>
          <div className="col">
            <span>Porcentaje Total: </span>
            <span style={style}>{`${this.props.percentage} %`}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Balance;
