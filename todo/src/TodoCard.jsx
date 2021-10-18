import React, { useState } from 'react';

const style = {
    width: '150px',
    height: '150px',
    backgroundColor: 'blue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    boxShadow: '10px 1px 5px -7px rgba(0,0,0,0.61)',
    textAlign: 'center',
};

const TodoCard = ({ dayOfDecember }) => {
    const [isClicked, setIsClicked] = useState(false);
    const daysUntilChristmas = 24 - dayOfDecember;

    return (
        <>
        <h3>Todo Card</h3>
        <div onClick={() => setIsClicked(!isClicked)} style={style}>
            {isClicked ? (
                <p>{daysUntilChristmas} days until Christmas 🎅</p>
            ) : (
                <p>hello</p>
            )}
        </div>
        </>
    );
};
export default TodoCard;
