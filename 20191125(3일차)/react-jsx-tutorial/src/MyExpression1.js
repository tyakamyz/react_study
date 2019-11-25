import React from 'react';

const MyExpression1 = () => {
    let name = "리액트";
    let age = 20;
    let color = "#f00";

    // {변수명} 형식으로 변수값을 출력할 수 있다.
    // 간단한 수식을 사용하는 것도 가능함.
    // 출력하려는 값이 undefined나 null이라면 그 자리는 출력되지 않는다.
    // 일반적인 HTML 속성은 따옴표를 사용. (필수)
    // 변수를 활용해서 HTML의 속성을 사용할 경우 따옴표를 사용하지 않는다.
    return (
        <>
          <h2>{name}님은 {age+1}세 입니다.</h2>  
          <p><font color="#00f">{name}</font>님은 <font color={color}>{age}</font>세 입니다.</p>
        </>
    );
};

export default MyExpression1;