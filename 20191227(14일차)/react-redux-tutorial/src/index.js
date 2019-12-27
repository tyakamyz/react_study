import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수 가져오기
import {createStore} from 'redux';

// 전체 App을 리덕스에 구독시키기 위해 Provider라는 객체를 가져온다.
import {Provider} from 'react-redux';

// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import {composeWithDevTools} from 'redux-devtools-extension';

// modules폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import {rootReducer} from './modules';

/** 스토어 생성 */
const store = createStore(rootReducer.composeWithDevTools());

/** 리액트 앱을 스토어에 구독시킴 */
ReactDOM.render(
    <Provider store = store>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();