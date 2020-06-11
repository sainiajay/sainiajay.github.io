import React from 'react';
import './Hello.css'
import withFrame from '../../commons/Frame/Frame';

const Hello = () => {
    return (
        <h1 className="Hello myexample">
            AJAY SAINI
        </h1>
    );
}

export default withFrame(Hello);