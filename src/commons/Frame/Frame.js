import React from 'react';
import './Frame.css'

const withFrame = (Element) => () =>
    <div className="Frame">
        <Element />
    </div>

export default withFrame;