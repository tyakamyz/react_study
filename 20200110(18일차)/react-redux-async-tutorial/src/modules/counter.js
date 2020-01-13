import { createAction, handleActions } from 'redux-actions';

/** 액션 */
// 어떤 컴포넌트가 겪는 상황을 구분하기 위한 문자열 변수들
// "파일이름/상황이름" 값을 지정하면 다른 모듈과 Action값이 충돌하는 것을 방지할 수 있다.
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

/** 액션 생성 함수 */
// 액션 객체를 만들어서 리턴한다
// 컴포넌트에 대한 액션 값의 수 만큼 정의 --> createAction() 함수를 통해 함수 정의를 자동화
export const plusAction = createAction(PLUS);
export const minusAction = createAction(MINUS);

/** 상태값 */
// 컴포넌트에서 다루고자 하는 데이터. 일반 변수나 JSON 객체 모두 자유롭게 설정 가능
const initialState = 0;

/** 상태값에 따라 동작할 액션 함수 정의 */
// export default handleActions(
//     {
//         [PLUS]: (state, action) => state + 1,
//         [MINUS]: (state, action) => state -1
//     },
//     initialState
// );

export default handleActions(
    {
        [PLUS]: (state, action) => {
            console.log(action);
            return state + action.payload.number;
        },
        [MINUS]: (state, action) => {
            console.log(action);
            return state - action.payload.number;
        }
    },
    initialState
);

/** 비동기 작업을 수행할 함수 정의 - 이 안에서 action함수들을 dispatch(호출)한다. */
// 이렇게 정의된 함수들은 컴포넌트의 props에 포함된다.
export const plusAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(() => {
        dispatch(plusAction({number: 10}));
    }, 1000);
};

export const minusAsync = () => dispatch => {
    // 1초 뒤 액션 디스패치
    setTimeout(() => {
        dispatch(minusAction({number: 5}));
    }, 1000);
};