import React, { Component } from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import BootstrapTable from "react-bootstrap-table-next";

class Table extends Component {
  render() {
    const columns = [
      {
        dataField: "name",
        text: "Name",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "cantidad",
        text: "Your Amount"
      },
      {
        dataField: "percentage",
        text: "Your Percentage",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "recommendedCantidad",
        text: "Recommended $",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "recommendedPercentage",
        text: "Recommended %",
        editable: (content, row, rowIndex, columnIndex) => false
      },
      {
        dataField: "diferencia",
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
