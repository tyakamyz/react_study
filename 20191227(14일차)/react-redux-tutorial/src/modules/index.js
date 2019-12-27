/**
 * action값과 action 생성함수들을 정의한 모듈을 하나로 묶어주는 기능을 하는 파일
 * 이 파일을 index.js에서 불러들여 스토어에 등록한다.
 */
import {combineReducers} from 'redux';

// 같은 폴더에 있는 MyCounterModule.js를 myCounter라는 이름으로 가져옴.
// --> 필요에 따라 모듈들을 지속적으로 가져온다.
import myCounter from './MyCounterModule';

// 가져온 모듈을 index.js에서 스토어에 등록하기 위해 하나로 통합
const rootReducer = combineReducers(
    // 가져온 모듈들을 콤마로 구분하여 통합
    myCounter
);

// 통합된 모듈들을 내보냄
export default rootReducer;