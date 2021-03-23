import React, { useState, useEffect } from 'react';

const UseEffectComponent = () => {
    const [count, updateName] = useState(0);

    useEffect(() => {
        console.log('onMount');
        return () => console.log('unMount');
    });

    return (<div className="box-section">
        <h1>useEffect Demo</h1>
        <button onClick={() => updateName(count + 1)}>update</button> - {count}
    </div>);
};

export default UseEffectComponent;
