import React, { Component } from "react";

class Balance extends Component {
  render() {
    let style = {
      color: this.props.percentage > 100 ? "red" : "green",
      fontSize: 35
    };

    function numberWithCommas(num) {
      num = num.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(num)) num = num.replace(pattern, "$1,$2");
      return num;
    }

    return (
      <div>
        <h3>Total de Gastos</h3>
        <p style={style}>{`$ ${numberWithCommas(this.props.total)}`}</p>
        <h3>Total %</h3>
        <p style={style}>{`${this.props.percentage} %`}</p>
      </div>
    );
  }
}

export default Balance;
