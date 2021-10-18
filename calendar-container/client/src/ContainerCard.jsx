import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"; //router

import CalendarCardContainer from "./components/CalendarCardContainer";

const TodoCard = React.lazy(() => import("todo_card/TodoCard"));

const style = {
  width: "100%",
};

const ContainerCard = () => {
  return (
    <div style={style}>
      <React.Suspense fallback={<p>Loading content from app 2...</p>}>
        <Switch>
          <Route path="/" exact component={CalendarCardContainer} />
          <Route path="/todo-list" component={TodoCard} />
        </Switch>
      </React.Suspense>   
    </div>
  );
};
export default ContainerCard;
