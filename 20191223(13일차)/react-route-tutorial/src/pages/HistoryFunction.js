import React from 'react';

const HistoryFunction = props => {

    /** Class형 컴포넌트의 라이프사이클에 해당하는 Hook 함수 */
    // history가 변경될 때만 호출되도록 두 번째 파라미터 배열에서 설정하고 있다.
    React.useEffect(() => {
        // useEffect() 함수의 일반 구현부분은 componentDidMount()에 해당한다.
        const unblock = props.history.block('정말 떠나실건가요?');

        // useEffect() 함수의 클로저는 componentWillUnmount() 에 해당한다.
        return () => {
            if (unblock) {
                unblock();
            }
        };
    }, [props.history]);

    return (
        <div>
            <h2>History Function</h2>
            <button
                onClick={() => {
                    props.history.goBack();
                }}>
                뒤로가기
            </button>
            <button
                onClick={() => {
                    props.history.push('/');
                }}>
                홈으로
            </button>
        </div>
    );
};

export default HistoryFunction;
