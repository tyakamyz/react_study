import React from 'react';

class HistoryClass extends React.Component {
    /** 화면이 갱신될 때 자동으로 실행되는 함수  */
    componentDidMount() {
        // this.props.history.block() 함수는 지정된 내용을 confirm창으로 표시한다.
        // --> 이 기능이 모든 페이지 전환시마다 실행된다.
        this.unblock = this.props.history.block('정말 떠나실건가요?');
    }

    /** 이 화면에서 빠져나갈 때 자동으로 실행되는 함수 */
    componentWillUnmount() {
        // 사용자가 confirm창에서 yes를 눌렀다면?
        if (this.unblock) {
            // 그만 묻는다.
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <h2>History Class</h2>
                <button
                    onClick={() => {
                        // 이전 페이지로 history 이동하기
                        // -2, -3 등의 파라미터를 지정할 경우 2,3단계 전 페이지로 이동함
                        this.props.history.goBack();
                    }}>
                    뒤로
                </button>
                <button
                    onClick={() => {
                        // 단순 페이지 이동
                        this.props.history.push('/');
                    }}>
                    홈으로
                </button>
            </div>
        );
    }
}

export default HistoryClass;
