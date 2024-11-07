import { Routes, Route } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import Counter from "./containers/PasswordLock/PasswordLock";
import Calculator from "./containers/Calculator/Calculator";

const App = () => {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </>
  );
};

export default App;
