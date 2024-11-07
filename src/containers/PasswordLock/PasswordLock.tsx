import { useDispatch, useSelector } from "react-redux";
import {
  pickOneNumber,
  deleteOneNumber,
  giveAccess,
  clearScreen,
} from "./PasswordSlice";

import { RootState } from "../../app/store";

const PasswordLock = () => {
  const counterValue = useSelector(
    (state: RootState) => state.counter.currentValue
  );
  const dispatch = useDispatch();

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "<", 0, "E"];

  const pickNumber = (value: string) => {
    if (value === "<") {
      dispatch(deleteOneNumber());
    } else if (value === "E") {
      dispatch(giveAccess());

      setTimeout(() => {
        dispatch(clearScreen());
      }, 500);
    } else {
      dispatch(pickOneNumber(value));
    }
  };

  const showStars = "*".repeat(counterValue.length);

  const screenColor =
    counterValue === "Access granted"
      ? "green"
      : counterValue === "Access denied"
      ? "red"
      : "black";

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-sm text-center ">
        <h3 className="mb-4">Password Lock</h3>

        <div className="mb-3 mt-5 display-4" style={{ color: screenColor }}>
          {counterValue === "Access granted" || counterValue === "Access denied"
            ? counterValue
            : showStars}
        </div>

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
              className="btn btn-primary m-1"
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

export default PasswordLock;
