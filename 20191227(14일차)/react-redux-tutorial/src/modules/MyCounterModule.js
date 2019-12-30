import { createAction, handleActions } from 'redux-actions';

/** 액션 */
// 어떤 컴포넌트가 겪는 상황을 구분하기 위한 문자열 변수들
// "파일이름/상황이름" 값을 지정하면 다른 모듈과 Action값이 충돌하는 것을 방지할 수 있다.
const PLUS = 'MyCounterModule/PLUS';
const MINUS = 'MyCounterModule/MINUS';

/** 액션 생성 함수 */
// 액션 객체를 만들어서 리턴한다
// 컴포넌트에 대한 액션 값의 수 만큼 정의 --> createAction() 함수를 통해 함수 정의를 자동화
export const plusAction = createAction(PLUS);
export const minusAction = createAction(MINUS);

/** 상태값 */
// 단순한 json 객체.
// 컴포넌트에서 다루고자 하는 데이터들을 포함한다.
const initialState = {
    number: 0,
    color: '#000',
};

/** Reducer 역할을 하는 JSON 객체 정의 */
// state로 전달되는 값은 initialState 구조의 데이터 --> 현재 화면에 반영되고 있는 값
// action값은 PLUS, MINUS 중 하나.
// 각각의 함수들이 action값에 의해 선택적으로 호출되고, 여기서 새로운 initialState 구조의 데이터를
// 리턴하면 그 내용이 화면에 자동으로 반영된다.
const myCountReducer = {
    [PLUS]: function(state, action) {
        const numberValue = state.number + 1;
        let colorValue = '#000';

        if (numberValue > 0) {
            colorValue = '#2f77eb';
        } else if (numberValue < 0) {
            colorValue = '#f60';
        }

        return { number: numberValue, color: colorValue };
    },

    [MINUS]: function(state, action) {
        const numberValue = state.number - 1;
        let colorValue = '#000';

        if (numberValue > 0) {
            colorValue = '#2f77eb';
        } else if (numberValue < 0) {
            colorValue = '#f60';
        }

        return { number: numberValue, color: colorValue };
    }
}

// 스토어 생성
const MyCounterModule = handleActions(myCountReducer, initialState);

// 생성된 스토어를 내보낸다.
export default MyCounterModule;
