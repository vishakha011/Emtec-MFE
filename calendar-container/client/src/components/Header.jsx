// import AddNumbers from "@vishakha01/mfe-shared-library";
import {AddNumbers} from "@vishakha01/mfe-shared-library/dist/index";
import { Link } from "react-router-dom";
import React from "react";

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
      <div>
        <p>{RenderAddNumbers}</p>
      </div>
      
    </header>
  );
};
export default Header;
