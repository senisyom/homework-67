import { useDispatch, useSelector } from "react-redux";
import { deleteNumber, increaseByNumber } from "./CounterSlice";
import { RootState } from "@reduxjs/toolkit/query";

const PasswordLock = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["-", 0, "E"],
  ];

  const handleButtonClick = (value) => {
    if (value === "-") {
      dispatch(deleteNumber());
    } else if (value === "E") {
    } else {
      dispatch(increaseByNumber(Number(value)));
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-sm text-center">
        <div className="mb-3 display-4">{counterValue}</div>
        <div className="d-flex flex-column align-items-center">
          {buttons.map((numbers, index) => (
            <div className="d-flex" key={index}>
              {numbers.map((value) => (
                <button
                  key={value}
                  className="btn btn-primary m-1"
                  style={{ width: "80px", height: "60px" }}
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordLock;
