import React from "react";

function Card(props) {
  return (
    <div>
      <h2>
        Ingreso Mensual:{" "}
        <input
          type="text"
          name="income"
          value={props.income}
          onChange={props.handle}
        />
      </h2>
    </div>
  );
}

export default Card;
