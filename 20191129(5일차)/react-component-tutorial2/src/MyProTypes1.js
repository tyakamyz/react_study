import React, {Component} from 'react';

// 컴포넌트 props의 필수 여부를 지정하거나 props의 DataType을 지정할 때 사용
import PropTypes from 'prop-types';

class MyProTypes1 extends Component {
    
    //속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        "name" : "기본이름"
    };

    static propTpyes = {
        name: PropTypes.string,
        // favoriteNumber의 데이터 타입과 필수 여부 지정
        // --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
        favoriteNumber: PropTypes.number.isRequired
    };
    
    render(){
        const {name, favoriteNumber, children} = this.props;        // 비구조화 할당
        return (
            <div>
                <p>
                    안녕하세요, 제 이름은 {name} 입니다. <br />
                    children 값은 {children} 입니다. <br />
                    제가 좋아하는 숫자는 {favoriteNumber} 입니다.
                </p>
            </div>
        );
    }
};

export default MyProTypes1;