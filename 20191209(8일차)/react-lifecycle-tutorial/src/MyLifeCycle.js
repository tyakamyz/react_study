import React from 'react';

class MyLifeCycle extends React.Component {
    /** update 상태를 확인하기 위한 state 값 생성 */
    /*
    state = {
        number: 0
    }
    생성자 만들때 지정해주는게 정석임.
    */

    /**
     * [Mount] (1) 컴포넌트 생성자
     * 컴포넌트가 생성될 때 최초 1회만 실행된다.
     * 이 메서드의 용도는 초기 state값을 결정하는 것이다.
     */
    constructor(props) {
        super(props);
        console.log('[Mount] (1) 컴포넌트 생성자');
        // (필요하다면) 초기 state값 결정
        this.state = {
            number : 0
        };
    }

    /**
     * [Mount] (3) 렌더링 함수
     * 라이프사이클 메서드 중 유일한 필수 메서드
     * 이 메서드 안에서 this.props나 this.state에 접근할 수 있으며,
     * 리액트 요소(HTML태그, 다른 컴포넌트)를 반한다.
     * 
     * 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState()를 사용하면 안되며
     * 브라우저의 DOM에 접근해서도 안된다.
     * 
     * DOM 정보를 가져오거나 state에 변화를 줄 때는 componuntDidMount()에서 처리해야 한다.
     * 
     */
    render() {
        console.log('[Mount] (3) render가 실행되었습니다.');
        return (
            <div>
                <h2>MyLifeCycle</h2>
                <h3>{this.state.number}</h3>

                <button type="button" onClick={e => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }}>
                    Plus(1)
                </button>
            </div>
        );
    }

    /**
     * [Mount] (4) render() 함수에 의해 브라우저에게 DOM이 표시된 후 호출된다.
     * jquery plugin등의 기타 외부 라이브러리로 DOM을 제어하고자 할 경우 이 위치에서 구현해야한다.
     * setTimeout, setInterval, Ajax 요청 같은 작업도 이 함수 안에서 구현한다.
     */
    componentDidMount(){
        console.log('[Mount] (4) componentDidMount가 실행되었습니다.');
    }

    /**
     * [Update]
     */
    /** [Update] (1) props의 변화에 따라 state값에도 변화를 주고자 하는 경우 사용 */
    getDerivedStateFromProps(nextProps, prevState){
        console.log('[Update] (1) getDerivedStateFromProps 실행되었습니다.');
    }

    /** [Update] (2) return이 true인 경우만 render()가 실행된다. */
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Update] (2) shouldComponentUpdate 실행되었습니다.');
        // 이 안에서의 this.state.numbe는 before 상태를 의미.
        // 현재 상태의 값은 nextState.number로 접근해야 함.
        console.log(">> 원본state=%d, nextState=%d",this.state.number, nextState.number);

        // 상태값이 3의 배수인 경우만 화면을 갱신하도록(render()가 실행되도록) 제어
        let refresh = true;

        if(nextState.number %3 != 0){
            refresh = false;
        }

        return refresh;
    }
    
    /** [Update] (3) props의 변화에 따라 state값에도 변화를 주고자 하는 경우 사용 */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Update] (3) getSnapshotBeforeUpdate 실행되었습니다.');
        return null;
    }
    
    /** [Update] (4) props의 변화에 따라 state값에도 변화를 주고자 하는 경우 사용 */
    componenetDidUpdate(prevProps, prevState){
        console.log('[Update] (4) componenetDidUpdate 실행되었습니다.');
        return null;
    }
    

    /**
     * [Unmount] 컴포넌트가 화면에서 제거될 때 호출
     */
    componentWillUnmount(){
        console.log('[Unmount] componentWillUnmount가 실행되었습니다.');
    }
}

export default MyLifeCycle;