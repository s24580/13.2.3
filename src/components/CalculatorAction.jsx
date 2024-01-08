import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function CalculatorAction({ action }) {
  let query = useQuery();
  let x = parseFloat(query.get("x"));
  let y = parseFloat(query.get("y"));
  let result;

  switch (action) {
    case "add":
      result = x + y;
      break;
    case "sub":
      result = x - y;
      break;
    case "mul":
      result = x * y;
      break;
    case "div":
      result = y !== 0 ? x / y : "Cannot divide by zero";
      break;
    default:
      result = "Invalid action";
  }

  return <div>Result: {result}</div>;
}

CalculatorAction.propTypes = {
  action: PropTypes.oneOf(['add', 'sub', 'mul', 'div']).isRequired,
};

export default CalculatorAction;
