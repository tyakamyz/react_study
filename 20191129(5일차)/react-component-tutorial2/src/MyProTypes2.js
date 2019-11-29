import React from 'react';

// 컴포넌트 props의 필수 여부를 지정하거나 props의 DataTpye을 지정할 때 사용
import PropTypes from 'prop-types';     //node_modules/pro-types/index.js 파일을 참조하여 PropTypes라는 별칭을 적용한다.

const MyProTypes2 = props => {

    const {name, favoriteNumber, children} = props;

    return (
        <div>
            <p>
                안녕하세요, 제 이름은 {name} 입니다. <br />
                children 값은 {children} 입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </p>
        </div>
    );
};

// 속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
MyProTypes2.defaultProps = {
    "name" : "기본이름"
};

/** 이 컴포넌트로 전달되는 props 값들에 대한 형식과 필수 여부 지정 */
MyProTypes2.proptype = {
    name: PropTypes.string,
    // favoriteNumber의 데이터 타입과 필수 여부 지정
    // --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
    favoriteNumber: PropTypes.number.isRequired
};

export default MyProTypes2;