import React from 'react';

/**
// Redux 순정
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*/
// Redux Hook 사용
import { useSelector, useDispatch } from 'react-redux';
// 액션이 발생한 경우 호출할 함수
import { plusAsync, minusAsync } from '../modules/counter';
/**/

import * as counterModule from '../modules/counter';


const Counter = () => {
    /** Hook 기능을 통해 상태값 가져오기 */
    // -> useSelector()함수에 전달하는 콜백함수가 호출되면서 state 파라미터로 상태값들이 전달된다.
    //    이 상태값들 중 사용하고자 하는 값들만 별도의 JSON으로 묶어 리턴받아 사용한다.
    const props = useSelector((state) => state);
    
    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    const dispatch = useDispatch();

    console.group('Counter');
    console.dir(props);
    console.groupEnd();
    

    return (
        <div>
            <h1>{props.counter}</h1>
            <button
                onClick={() => {
                    //props.action.plusAsync();
                    dispatch(plusAsync());
                }}>
                +
            </button>
            <button
                onClick={() => {
                    //props.action.minusAsync();
                    dispatch(minusAsync());
                }}>
                -
            </button>
        </div>
    );
};

/**
// Redux 순정
export default connect(
    // state값을 그대로 리턴
    state => state,
    dispatch => ({
        // counterModule에 정의된 action함수들을 "action"이라는 객체에 포함시켜 컴포넌트의 props로 전달함
        action: bindActionCreators(counterModule, dispatch)
    })
)(Counter);
/*/
// Redux Hook 사용 --> 컴포넌트의 props로 전달되는 값이 없어진다.
export default React.memo(Counter);
/**/