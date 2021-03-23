import React, { useReducer, useState } from 'react';

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'increment':
            console.log(action.payload)
            return {count: state.count + 1};
        case 'decrement': return {count: state.count - 1};
        default: return state
    }
};

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const [lastClicked, updateStatus] = useState(0);

    const incrementValue = () => {
        updateStatus(lastClicked + 1);
        dispatch({type: 'increment', payload: {lastClicked}})
    };

    const decrementValue = () => {
        updateStatus(lastClicked - 1);
        dispatch({type: 'decrement', payload: {lastClicked}})
    };

    return (<div className="box-section">
            <h1>useReducer Demo</h1>
            <h4>For Counter Example</h4>
            <span className="button-container">
                <button onClick={incrementValue} style={{background: lastClicked > 0 ? 'red' : 'green'}}>+</button>
                <p>You clicked {state.count} times</p>
                <button onClick={decrementValue} style={{background: lastClicked <= 0 ? 'green' : 'red'}}>-</button>
            </span>
        </div>);
};

export default UseReducerComponent;
