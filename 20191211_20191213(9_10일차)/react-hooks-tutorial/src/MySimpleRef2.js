import React from 'react';

const MySimpleRef2 = () => {
    // 참조변수는 HTML 태그 뿐 아니라 Javascript에서 사용되는 변수를 정의하는데도 사용된다.
    // 이렇게 정의되는 변수는 컵ㅁ포넌트가 다시 렌더링 되어도 리셋되지 않는다.
    const myName = React.useRef("리액트");
    // 참조변수에 대한 setter
    const setMyName = (value) => { myName.current = value; };
    // 참조변수에 대한 getter
    const getMyName = () => myName.current;

    // getter를 통한 변수값 조회
    console.log("[MySimpleRef2] %s", getMyName());

    // setter를 통한 변수값 변경
    setMyName("자바스크립트");
    console.log("[MySimpleRef2] %s", getMyName());

    return (
        <div>
           <h2>MySimpleRef2</h2>
           <p>{getMyName()}</p>
        </div>
    );
};

export default MySimpleRef2;