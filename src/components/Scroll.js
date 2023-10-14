import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid', height: '800px'}} data-testid='scroll-container'>
            {props.children}
        </div>        
    )
};

export default Scroll;