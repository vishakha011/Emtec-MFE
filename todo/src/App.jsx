
import React from 'react';
import TodoCard from './TodoCard';
// import Common from "@shared/shared-library";

const App = () => {
    // const AddNumbers = Common(1, 3)
    return (
        <main>
            <h1>This is the Todo app</h1>
            <TodoCard day={1} />
            {/* <p>{AddNumbers}</p> */}
        </main>
    );
};
export default App;
