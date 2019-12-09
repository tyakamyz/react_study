/* eslint-disable import/first */           // 모든 import 구문이 가장 먼저 와야 한다는 규칙을 이 파일에 한해서 해제. 주석이 아님!
import React from 'react';
// HTML DOM에 대한 탐색 기능을 제공
import {findDOMNode} from 'react-dom';
// jQuery 참조
import $ from 'jquery';
// React 이외의 일반 Javascript에서 $와 jQuery를 인식할 수 있도록 지정
window.$ = window.jQuery = $;

class MyJQueryChosen extends React.Component {
    render() {
        return (
            <div>
                <select ref="select">
                    <option value="봄">봄</option>
                    <option value="여름">여름</option>
                    <option value="가을">가을</option>
                    <option value="겨울">겨울</option>
                </select>

                <hr />
            </div>
        );
    }

    componentDidMount(){
        // 참조 ID에 의해 HTML DOM을 탐색한다.
        const el = findDOMNode(this.refs.select);

        // 탐색 결과를 jQuery 객체로 생성하여 jQuery 기능을 사용한다.
        const currentEl = $(el);
    }
}

export default MyJQueryChosen;