import { useDispatch, useSelector } from "react-redux";
import { pickOneNumber, deleteOneNumber, giveAccess } from "./CounterSlice";

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
    } else {
      dispatch(pickOneNumber(value));
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-sm text-center">
        <div className="mb-3 display-4">{counterValue}</div>
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
