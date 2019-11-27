import React from 'react';

/** property에 대한 값이 없을 경우를 대비한 기본값 정의 (함수형) */
const MyDefaultProps2 = (props) => {
    return (
        <div>
            <h3>MyDefaultProps2</h3>
            <p>제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.</p>
        </div>
    );
};

//속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyDefaultProps2.defaultProps = {
    "name" : "unknow",
    "age" : 0
};

export default MyDefaultProps2;