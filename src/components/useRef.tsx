import React, {useRef, useEffect, useState} from 'react';

export const UseRefComponent = () => {
    const [name, updateName] = useState('');
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    });

    return (
        <div className="box-section">
            <h1>useRef Demo</h1>
            <input type="text"
                   value={name}
                   onChange={(e) => updateName(e.target.value) } />
            render count {renderCount.current}
        </div>
    );
};

// import React, {useRef, useEffect, useState} from 'react';
//
// export const UseRefFocusComponent = () => {
//     const inputRef = useRef(null);
//     const onButtonClick = () => inputRef.current.focus();
//
//     return (<>
//             <input ref={inputRef} />
//             <button onClick={onButtonClick}>Focus the input</button>
//         </>);
// };
