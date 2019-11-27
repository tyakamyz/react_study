import React, {Component} from 'react';

/** 클래스형 컴포넌트 */
class MyComponent1 extends Component {
    render(){
        const message = '내가 만든 클래스형 컴포넌트';
        return (
            <div>
                <h3>MyComponent1</h3>
                <p>{message}</p>
            </div>
        );
    }
};

// 다른 파일에서 이 파일을 import할 때. 위에서 선언한 MyComponent 클래스를 불러오도록 설정한다.
export default MyComponent1;