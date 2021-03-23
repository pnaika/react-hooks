import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const UseStateComponent = () => {
    // this runs the very first time component renders
    // const [count, setCount] = useState(() => {
    //   console.log('run this method')
    // });

    // this runs every time the component renders
    const [count, setCount] = useState(0);
    const [state, setStateValue] = useState({
        count: 0,
        color: 'red'
    });

    // Overwrites the count here, even though there are two setCount within the func it will just increment by 1
    const incrementValue = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    // Uses the prev value and hence decrements the value by two as expected
    const decrementValue = () => {
        setCount((prev) => prev - 1);
        setCount((prev) => prev - 1);
    };

    const updateColor = () => {
        setStateValue((prevState) => {
            return {
                ...prevState,
                count: prevState.count + 1,
            };
        })
    };

    return (
        <div className="box-section">
            <h1>useState Demo</h1>
            <h4>For Counter Example</h4>
            <span className="button-container">
                <Button variant="contained" color="primary" onClick={incrementValue}>
                    +
                </Button>
                <p>You clicked {count} times</p>
                <Button variant="contained" color="secondary" onClick={decrementValue}>
                    -
                </Button>
            </span>

            <h4>For Name Example</h4>
            <span className="button-container">
                {state.count}, {state.color}
                <Button variant="contained" color="secondary" onClick={updateColor}>
                    change color
                </Button>
            </span>
        </div>
    );
};

export default UseStateComponent;
