import React from 'react';

import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as counterModule from '../modules/counter';

const Counter = props => {
   
    console.group("Counter");
    console.dir(props);
    console.groupEnd();
    
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={() => {
                props.action.plusAction();
            }}>
                +
            </button>
            <button onClick={() => {
                props.action.minusAction();
            }}>
                -
            </button>
        </div>
    );
};

export default connect(
    // state값을 그대로 리턴 state = () => { return state };
    state => state,
    dispatch => (
        // counterModule에 정의된 action함수들을 "action"이라는 객체에 포함시켜 컴포넌트의 props로 전달함
        // (action 외에 다른 이름을 사용해도 상관없음)
        action: bindActionCreators(counterModule, dispatch)
    )
)(Counter);