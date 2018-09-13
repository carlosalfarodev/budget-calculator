import React, { Component } from "react";
import Header from "./Header";
import Card from "./Card";
import Balance from "./Balance";
import Table from "./Table";
import {
  getPercentage,
  getPercentageUsed,
  getUserPercentage
} from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        {
          id: 1,
          name: "Diezmos",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 2,
          name: "Ahorros",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 3,
          name: "Comida",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 13,
          difference: 0
        },
        {
          id: 4,
          name: "Servicios Publicos",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 5,
          name: "Vivienda",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 25,
          difference: 0
        },
        {
          id: 6,
          name: "Transporte",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 15,
          difference: 0
        },
        {
          id: 7,
          name: "Medico",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 3,
          difference: 0
        },
        {
          id: 8,
          name: "Ropa",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        },
        {
          id: 9,
          name: "Personal",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        },
        {
          id: 10,
          name: "Deudas",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 0,
          difference: 0
        },
        {
          id: 11,
          name: "Recreasion",
          amount: "",
          percentage: "",
          recommendedAmount: 0,
          recommendedPercentage: 8,
          difference: 0
        }
      ],
      income: "",
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
      const recommendedAmount = getPercentage(
        income,
        expense.recommendedPercentage
      );
      return { ...expense, recommendedAmount };
    });
  }

  rowChange(id, value) {
    value = parseInt(value, 10);

    if (!value) {
      return 0;
    } else {
      let stateCopy = Object.assign({}, this.state);
      stateCopy.expenses[id - 1].percentage = getUserPercentage(
        this.state.income,
        value
      );
      stateCopy.expenses[id - 1].difference = (
        stateCopy.expenses[id - 1].recommendedPercentage -
        stateCopy.expenses[id - 1].percentage
      ).toFixed(2);
      this.setState(stateCopy);
      console.log(this.state.expenses);
    }
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
