import AddNumbers from "@vishakha01/mfe-common-library";
import { Constants } from "@vishakha01/mfe-constants-library"
import { Link } from "react-router-dom";
import React from "react";

const CommonModulestyle = {
  boxShadow: "0px 0px 5px 0px lightblue",
  padding: "1rem 2rem",
  margin: "2rem",
  width: "600px"
}

const btn = {
  display: "inline-block",
  padding: "8px 16px",
  margin:"0 5px",
  outline:"none",
  border:"none",
  cursor: "pointer"
}

const Header = () => {
  const RenderAddNumbers = AddNumbers(12, 14)

  return (
    <header>
      <nav>
        <div className="logo text-capitalize text-center">To Do List</div>
        <ul className="nav-links">
          <Link to="/">
            <li>Calendar</li>
          </Link>
          <Link to="/todo-list">
            <li>ToDo List</li>
          </Link>
        </ul>
      </nav>
      <div style={CommonModulestyle}>
      <h3>Common Module Content</h3>
        <p>{RenderAddNumbers}</p>
      </div>
      <div  style={CommonModulestyle}>
        <h3>Contants Module Contents</h3>
        <button style={btn} onClick={() =>alert(Constants.UNKNOWN_ERROR)}>Unknown Error</button>
        <button style={btn} onClick={() =>alert(Constants.NETWORK_ERROR)}>Unknown Error</button>
      </div>
    </header>
  );
};
export default Header;
