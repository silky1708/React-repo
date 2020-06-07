import React from "react";
import "../App.css";

function Square(props) {
  return (
    <React.Fragment>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </React.Fragment>
  );
}
export default Square;
