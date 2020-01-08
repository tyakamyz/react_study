import React from 'react';

// Router에 의해 호출되는 형식이 아닌, 일반 컴포넌트가 spa구성에 필요한 location, history를 사용하기위해 참조해야하는 모듈
import { withRouter } from 'react-router-dom';

const Form = props => {
    // createRef() 함수를 통해 참조변수를 생성
    const keywordInput = React.createRef();

    // form의 submit 이벤트
    const onSubmitListener = e => {
        //submit에 의한 페이지 이동 방지
        e.preventDefault();

        console.group("Form");
        console.debug("검색어: %s", keywordInput.current.value);
        console.groupEnd();

        // 검색어에 Path 파라미터를 적용하여 URL을 변경
        // --> App.js에 설정된 <Route>가 재동작
        //      --> pages/KakaoImageSearch가 호출되면서 ImageList에게 검색어를 props로 전달
        props.history.push("/" + keywordInput.current.value);
    };

    return (
        <form onSubmit={onSubmitListener}>
            <input type="text" ref={keywordInput} placeholder="검색어를 입력하세요" />
            <button type="submit">검색</button>
        </form>
    );
};

// 컴포넌트를 내보낼 때 withRouter라는 함수로 가공하면 이 컴포넌트안에서는 location과 match, history 등을 사용할 수 있다.
export default withRouter(Form);