// import { Common } from "@shared-library";
import React from 'react';
import TodoCard from './TodoCard';

const App = () => {
    return (
        <main>
            <h1>This is the Todo app</h1>
            <TodoCard day={1} />
        </main>
    );
};
export default App;
