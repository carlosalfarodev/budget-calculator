import React, { Component } from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";

class Table extends Component {
  render() {
    const columns = [
      {
        dataField: "name",
        text: "Nombre",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "amount",
        text: "Su Cantidad"
      },
      {
        dataField: "percentage",
        text: "Su Porcentaje",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "recommendedAmount",
        text: "$ Recomendada",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "recommendedPercentage",
        text: "% Recomendado",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "difference",
        text: "$ - % Diferencia",
        editable: (content, row, rowIndex, columnIndex) => false
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
          afterSaveCell: (oldValue, newValue, row, column) => {
            this.props.edit(row.id, newValue);
          }
        })}
      />
    );
  }
}

export default Table;
