import React from 'react';

/**
 * 이 예제의 react 버전
 * 
 * https://github.com/chenglou/react-chosen
 */

// index.html 에서 참조하고 있는 jQuery를 React 안으로 가져옴.
const $ = window.$;

class MyJQueryChosen extends React.Component {
    render() {
        return (
            <div>
                <h2>MyJQueryChosen</h2>
                <select ref='select'>{this.props.children}</select>
                <hr />
            </div>
        );
    }

    /** 컴포넌트가 표시하는 HTML에 jQuery 플러그인 적용 */
    componentDidMount() {
        //----------------------------------
        // 플러그인 연결하기
        //----------------------------------
        // 탐색 결과를 jQuery 객체로 생성하여 jQuery 기능을 사용한다.
        this.$el = $(this.refs.select);
        this.$el.chosen({
            width: '200px'
        });

        //----------------------------------
        // React 컴포넌트의 이벤트를 플러그인 이벤트로 연결
        // --> 이벤트 연결을 위해서 반드시 이벤트 핸들러는 별도의 함수로서 존재해야 한다.
        //----------------------------------
        // change 이벤트가 발생했을 때 this 키워드의 충돌을 방지하기 위한 바인드 처리
        this.handleChange = this.handleChange.bind(this);

        // 컴포넌트 내에서의 change 이벤트를 jQuery plugin의 change 이벤트에 연결함
        this.$el.on('change', this.handleChange);
    }

    /** 컴포넌트가 표시하는 HTML에 jQuery 플러그인 갱신 */
    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
            this.$el.trigger('chosen:updated');
        }
    }

    /** 컴포넌트가 표시하는 HTML에 jQuery 플러그인 해제 */
    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.chosen('destroy');
    }

    /** onChange 이벤트가 발생한 경우 --> 컴포넌트의 props로 전달된 onChange 이벤트를 호출한다. */
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
}

export default MyJQueryChosen;
