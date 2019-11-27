import React, { Component } from 'react';

class MyChildren1 extends Component {
    //속성들에 대한 기본값을 JSON으로 정의 (객체이름 고정)
    static defaultProps = {
        "width": 300,
        "height": 100,
        "children" : "내용이 없습니다."
    };

    // props를 활용하여 myStyle이라는 이름의 스타일시트 속성 정의
    get myStyle() {
        return{
            "width" : this.props.width + "px",
            "height" : this.props.height + "px",
        };
    };

    set MyStyle(value){
        this.myStyle = value;
    };

    render() {
        return (
            <div>
                <textarea style={this.myStyle}>{this.props.children}</textarea>
            </div>
        );
    }
}

export default MyChildren1;