import React from 'react';

const MyUnstructed2 = (props) => {
    // 비구조 문법을 통해 변수 속성값을 변수로 정의
    const {color, children} = props;        // props에 있는 값을 차례로 color와 children에 넣어줌

    return (
        <div>
            <font color = {color}>{children}</font>
        </div>
    );
};

MyUnstructed2.defaultProps = {
    "color" : "#000",
    "children" : "내용이 없습니다"
};

export default MyUnstructed2;