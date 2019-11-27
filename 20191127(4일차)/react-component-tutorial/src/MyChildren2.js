import React from 'react';

const MyChildren2 = (props) => {
    const myStyle = {
        "width" : props.width + "px",
        "height" : props.height + "px"
    };
    return (
            <textarea style={myStyle}>{props.children}</textarea>
    );
};

MyChildren2.defaultProps = {
    "width" : 300,
    "height" : 100
};

export default MyChildren2;