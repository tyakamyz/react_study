import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
        // 앞으로 추가될 무듈들이 이 위치에서 리덕스에 추가됨.
        counter
    }
);