import AddNumbers from "@vishakha01/mfe-common-library";
import { Link } from "react-router-dom";
import React from "react";

const CommonModulestyle = {
  boxShadow: "0px 0px 5px 0px lightblue",
  padding: "1rem 2rem",
  margin: "2rem",
  width: "600px"
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
      
    </header>
  );
};
export default Header;
