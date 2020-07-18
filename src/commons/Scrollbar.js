import React, { useRef, useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const withScrollbar = (Element) => () => {
    const elementRef = useRef(null);
    useEffect(() => {
        if(elementRef.current) {
            Scrollbar.init(elementRef.current);
        }
    });
    return <Element ref={elementRef}/>
}

export default withScrollbar;