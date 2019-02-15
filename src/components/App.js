import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
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
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 2,
          name: "Ahorros",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 3,
          name: "Comida",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 13,
          difference: 0
        },
        {
          id: 4,
          name: "Servicios Publicos",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 10,
          difference: 0
        },
        {
          id: 5,
          name: "Vivienda",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 25,
          difference: 0
        },
        {
          id: 6,
          name: "Transporte",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 15,
          difference: 0
        },
        {
          id: 7,
          name: "Medico",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 3,
          difference: 0
        },
        {
          id: 8,
          name: "Ropa",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 3,
          difference: 0
        },
        {
          id: 9,
          name: "Personal",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 3,
          difference: 0
        },
        {
          id: 10,
          name: "Deudas",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 5,
          difference: 0
        },
        {
          id: 11,
          name: "Recreasion",
          amount: "",
          percentage: 0,
          recommendedAmount: 0,
          recommendedPercentage: 3,
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

    let value = event.target.value;
    this.setState(prevState => {
      return {
        income: value,
        expenses: this.populateRecommended(value)
      };
    });
  }

  populateRecommended(income) {
    income = income.replace(/,/g, "");
    parseInt(income, 10);
    return this.state.expenses.map(expense => {
      const recommendedAmount = getPercentage(
        income,
        expense.recommendedPercentage
      );
      return { ...expense, recommendedAmount };
    });
  }

  rowChange(id, value) {
    if (!value) {
      return 0;
    } else {
      value = value.replace(/,/g, "");
      parseInt(value, 10);
      let stateCopy = Object.assign({}, this.state);
      stateCopy.expenses[id - 1].percentage = getUserPercentage(
        this.state.income,
        value
      );
      stateCopy.expenses[id - 1].difference = (
        stateCopy.expenses[id - 1].recommendedPercentage -
        stateCopy.expenses[id - 1].percentage
      ).toFixed(2);
      stateCopy.totalExpenses = this.getTotalExpenses(
        stateCopy.expenses,
        stateCopy.totalExpenses
      ).toFixed(2);
      stateCopy.percentageUsed = getPercentageUsed(
        stateCopy.income,
        stateCopy.totalExpenses
      );
      this.setState(stateCopy);
    }
  }

  getTotalExpenses([...expenses]) {
    return expenses.reduce((acc, item) => {
      return acc + (parseInt(item.amount.replace(/,/g, ""), 10) || 0);
    }, 0);
  }

  refreshUserPercentages(income, expenses) {
    return;
  }

  render() {
    const income = this.state.income;

    return (
      <div className="App">
        <div className="container">
          <Header />
          <Card income={income} handle={this.handleChange} />
          <div className="table-responsive-md">
            <Table data={this.state.expenses} edit={this.rowChange} />
          </div>
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
