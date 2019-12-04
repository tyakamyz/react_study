import React from 'react';

const MyArrayComponent1 = props => {
    //화면에 표시할 데이터
    const myArray = ['hello','world'];

    // 화면에 표시할 반복 컴포넌트
    const myArrayItem = myArray.map((item, index) => {
        return(
            // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key 속성을 포함해야함
            <li key={index}>{item}</li>
        );
    });
    return (
        <div>
            <h2>MyArrayComponent1</h2>
            <ul>{myArrayItem}</ul>
            <hr />
        </div>
    );
};
export default MyArrayComponent1