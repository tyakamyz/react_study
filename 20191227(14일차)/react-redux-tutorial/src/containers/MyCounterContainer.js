/** 
 * 컨테이너 컴포넌트
 * 스토어를 구독하고, 액션을 리턴하는 함수를 디스패치 하는 역할을 한다. --> 스토어에 연결한다.
 */
import React from 'react';
import {connect} from 'react-redux';
import MyCounterComponent from '../components/MyCounterComponent';
import {plusAction, minusAction} from '../modules/MyCounterModule';

/**
 * 스토어로부터 상태값과 action을 리턴하는 함수를 전달받는 컴포넌트
 * 여기서 화면구성을 담당하는 컴포넌트를 호출한다.
 */

const MyCounterContainer = (module) => {
    console.log(module);
    const {number, color, plusAction, minusAction} = module;

    return (
        <div>
            <MyCounterComponent number={number} color={color} onPlusClick={plusAction} onMinusClick={minusAction} />
        </div>
    );
};

/** 스토어에 상태값과 action을 전달하는 함수를 연결하여 디스패치 하는 처리를 구현함. */
const getState = state => ({number: state.myCounter.number, color: state.myCounter.color});
const actions = {plusAction, minusAction};

// 스토어에 연결 --> 리턴되는 객체는 함수
const dispatch = connect(getState, actions);

// 스토어에 연결된 함수를 통해 이 컴포넌트 자체를 디스패치 한 결과 형태로 내보낸다.
export default dispatch(MyCounterContainer);


// 위에 과정을 아래와 같이 축약해서 사용하는 경우가 많음
//export default connect(state => ({number: state.myCounter.number, color: state.myCounter.color}), {plusAction, minusAction})(MyCounterContainer);