import React from 'react';

/**
 * 일반적인 컴포넌트 정의
 * @param props --> 화면에 표시할 변수값과 이벤트 핸들러 함수가 포함되어 있는 형태
 */
const MyCounterComponent = (props) => {
    return (
        <div>
            <h1 style={{color: props.color}}>{props.number}</h1>
            <div>
                <button onClick={() => {props.onPlusClick()}}>+1</button>
                <button onClick={() => {props.onMinusClick()}}>-1</button>
            </div>
        </div>
    );
};

export default MyCounterComponent;
