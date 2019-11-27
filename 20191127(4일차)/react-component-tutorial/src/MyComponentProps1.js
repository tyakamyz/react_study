import React, {Component} from 'react';

class MyComponentProps1 extends Component {
// Component 클래스는 props라는 변수를 내장한다.
// 클래스의 메서드가 클래스의 변수(=멤버변수)에 접근할 경우 'this'를 사용해야 함.
// "this.props.사용자지정변수" 형식으로 값에 접근할 수 있다.
    render(){
        return (
            <div>
                <h3>MyComponentProps1</h3>
                <p>제 이름은 <b>{this.props.name}</b>이고 나이는 <b>{this.props.age}</b>입니다.</p>
            </div>
        );
    }
};

export default MyComponentProps1;