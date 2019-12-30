import React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * 라우팅되지 않고 다른 컴포넌트에 의해서 컴포넌트로서 활용되는 함수
 * App.js에 의해 호출되지 않고, ProfessorItem에 의해서 호출되도록 구성.
 */
const MyWithRouter = (props) => {
    return (
        <div>
            <h4>location</h4>
            {/* JSON.stringify -> json을 문자열로 변환하는 JS 기본 내장함수 */}
            <pre>{JSON.stringify(props.location)}</pre>
            <h4>match</h4>
            <pre>{JSON.stringify(props.match)}</pre>
        </div>
    );
};

// 컴포넌트를 내보낼 때 withRouter라는 함수로 가공하면
// 이 컴포넌트 안에서는 location과 match, history 등을 사용할 수 있다.
export default withRouter(MyWithRouter);
