import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** 리덕스를 위한 참조 추가 */
// 리덕스에서 스토어 생성 함수 가져오기
// import { createStore } from 'redux';
// 리덕스에서 스토어 생성 함수와 미들웨어 함수 가져오기
import { createStore, applyMiddleware } from 'redux';
// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';
// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import { composeWithDevTools } from 'redux-devtools-extension';
// modules폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import rootReducer from './modules';

// 미들웨어 불러오기
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import { createLogger } from 'redux-logger';

// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

/** 스토어 생성 */
// --> 스토어 생성 기본 코드
//const store = createStore(rootReducer, composeWithDevTools());

/**
// --> 미들웨어를 적용한 상태의 스토어 생성 코드 (기본)
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
/*/
// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용 코드, 완성 후 기본코드로 전환 필요)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
/**/

/** 리액트 앱을 스토어에 구독시킴 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
