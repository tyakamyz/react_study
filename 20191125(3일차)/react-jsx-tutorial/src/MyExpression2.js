import React from 'react';

const myEllipsis = (message, len) => {
    let str = message;
    if(str.length > len){
        str = str.substring(0, len) + "...";
    }
    return str;
}

const MyExpression2 = () => {
    const message = "리액트는 가장 주목받는 프론트앤드 개발 프레임워크 입니다.";

    // 함수를 호출한 jsx 표현식 사용
    return (
        <div>
            <h2>{myEllipsis(message, 15)}</h2>
        </div>
    );
};

export default MyExpression2;