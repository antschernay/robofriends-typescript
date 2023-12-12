import React from 'react';

type Props = {
    children?: JSX.Element
}

const Scroll = (props: Props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid', height: '800px'}} data-testid='scroll-container'>
            {props.children}
        </div>        
    )
};

export default Scroll;