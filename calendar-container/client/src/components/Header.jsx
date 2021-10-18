// import PI  from "@shared/shared-library";
import { Link } from "react-router-dom";
import React from "react";

const Header = () => {

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
      {/* <h1>Welcome, {PI}</h1> */}
    </header>
  );
};
export default Header;
