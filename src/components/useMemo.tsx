import React, {useMemo, useState} from 'react';

const UseMemoComponent = () => {
    const number = 1;
    const [dark, setTheme] = useState(false);

    useMemo(() => multiplierWithDelay(number), [number]);

    const updateStyle = {
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    };

    return (<div style={updateStyle} className="box-section">
        <h1>useMemo Demo</h1>
        <button onClick={() => setTheme(prevState => !prevState)}>Change Theme</button>
        {
            dark ? <div>there was no delay, thanks to useMemo !!</div> : null
        }
    </div>);
};

const multiplierWithDelay = (input: number) => {
    for(let i=0; i<=1000000000; i++) {}
    return input * 10;
};

export default UseMemoComponent;
