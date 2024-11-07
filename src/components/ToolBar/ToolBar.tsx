import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-sm">
        <span className="navbar-brand">Choose what you wanna do</span>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Password page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/calculator" className="nav-link">
              Сalculator page
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ToolBar;
