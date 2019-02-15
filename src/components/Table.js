import React, { Component } from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";

class Table extends Component {
  render() {
    function percentageFormater(cell, row) {
      return (
        <span>
          <strong>{cell} %</strong>
        </span>
      );
    }

    const columns = [
      {
        dataField: "name",
        text: "Nombre",
        editable: (content, row, rowIndex, columnIndex) => false,
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      },
      {
        dataField: "amount",
        text: "Su Cantidad",
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      },
      {
        dataField: "percentage",
        text: "Su Porcentaje",
        formatter: percentageFormater,
        editable: (content, row, rowIndex, columnIndex) => false,
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      },
      {
        dataField: "recommendedAmount",
        text: "$ Recomendada",
        editable: (content, row, rowIndex, columnIndex) => false,
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      },
      {
        dataField: "recommendedPercentage",
        text: "% Recomendado",
        formatter: percentageFormater,
        editable: (content, row, rowIndex, columnIndex) => false,
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      },
      {
        dataField: "difference",
        text: "$ - % Diferencia",
        formatter: percentageFormater,
        style: (cell, row, rowIndex, colIndex) => {
          if (cell < 0) {
            return {
              color: "red"
            };
          } else {
            return {
              color: "green"
            };
          }
        },
        editable: (content, row, rowIndex, columnIndex) => false,
        headerStyle: (column, colIndex) => {
          return { backgroundColor: "#7DB93F", color: "#fff" };
        }
      }
    ];

    return (
      <BootstrapTable
        hover
        keyField="id"
        data={this.props.data}
        columns={columns}
        cellEdit={cellEditFactory({
          mode: "click",
          blurToSave: true,
          afterSaveCell: (oldValue, newValue, row, column) => {
            this.props.edit(row.id, newValue);
          }
        })}
      />
    );
  }
}

export default Table;
