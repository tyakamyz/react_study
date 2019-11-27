import React from 'react';

/** 함수형 컴포넌트의 속성(Property) 사용 */
// 함수 파라미터로 속성을 받아야 한다.
const MyComponentProps2 = (props) => {      // 클래스형과 다르게 파라미터 이름을 props 외에 다른 이름으로 정의할 수 있다.
    return (
        <div>
            <h3>MyComponentProps2</h3>
            <p>제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b> 입니다.</p>
        </div>
    );
};

export default MyComponentProps2;