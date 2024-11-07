import { useDispatch, useSelector } from "react-redux";
import {
  addToValues,
  deleteOneNumber,
  calculate,
  clearScreen,
} from "./CalculatorSlice";

import { RootState } from "../../app/store";

const Calculator = () => {
  const values = useSelector((state: RootState) => state.calculator.values);
  const result = useSelector((state: RootState) => state.calculator.result);
  const dispatch = useDispatch();

  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "0",
    "-",
    "*",
    "/",
    "<",
    "=",
    "C",
  ];

  const pickNumber = (value: string) => {
    if (value === "<") {
      dispatch(deleteOneNumber());
    } else if (value === "=") {
      dispatch(calculate());
    } else if (value === "C") {
      dispatch(clearScreen());
    } else {
      dispatch(addToValues(value));
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-sm text-center">
        <div className="mb-3 display-4">{values}</div>
        {result !== null && (
          <div className="display-5 text-success">= {result}</div>
        )}

        <div
          className="d-grid gap-1"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            maxWidth: "240px",
            margin: "0 auto",
          }}
        >
          {buttons.map((value) => (
            <button
              key={value}
              className="btn btn-warning m-1"
              style={{ width: "80px", height: "60px" }}
              onClick={() => pickNumber(value.toString())}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
