import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; //router

import ContainerCard from "./ContainerCard";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header />
      <ContainerCard /> 
    </Router>
  );
}

export default App;
