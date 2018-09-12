import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import Balance from "./Balance";
import Table from "./Table";
import { getPercentage, getPercentageUsed } from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          name: "Diezmos",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 10,
          diferencia: 0
        },
        {
          id: 2,
          name: "Ahorros",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 10,
          diferencia: 0
        },
        {
          id: 3,
          name: "Comida",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 13,
          diferencia: 0
        },
        {
          id: 4,
          name: "Servicios Publicos",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 10,
          diferencia: 0
        },
        {
          id: 5,
          name: "Vivienda",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 25,
          diferencia: 0
        },
        {
          id: 6,
          name: "Transporte",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 15,
          diferencia: 0
        },
        {
          id: 7,
          name: "Medico",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 3,
          diferencia: 0
        },
        {
          id: 8,
          name: "Ropa",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 8,
          diferencia: 0
        },
        {
          id: 9,
          name: "Personal",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 8,
          diferencia: 0
        },
        {
          id: 10,
          name: "Deudas",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 0,
          diferencia: 0
        },
        {
          id: 11,
          name: "Recreasion",
          cantidad: 0,
          percentage: 0,
          recommendedCantidad: 0,
          recommendedPercentage: 8,
          diferencia: 0
        }
      ],
      income: 0,
      totalExpenses: 0,
      percentageUsed: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.rowChange = this.rowChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const value = event.target.value;

    this.setState(prevState => {
      return {
        income: value,
        percentageUsed: getPercentageUsed(
          prevState.income,
          prevState.totalExpenses
        ),
        expenses: this.populateRecommended(value)
      };
    });
  }

  populateRecommended(income) {
    return this.state.expenses.map(expense => {
      const recommendedCantidad = getPercentage(
        income,
        expense.recommendedPercentage
      );
      return { ...expense, recommendedCantidad };
    });
  }

  rowChange(id, value) {
    console.log(id);
    console.log(this.state.expenses[id - 1]);
    this.setState();
  }

  render() {
    const income = this.state.income;

    return (
      <div className="App">
        <Header />
        <div className="container">
          <Card income={income} handle={this.handleChange} />
          <Table data={this.state.expenses} edit={this.rowChange} />
          <Balance
            total={this.state.totalExpenses}
            percentage={this.state.percentageUsed}
          />
        </div>
      </div>
    );
  }
}

export default App;
