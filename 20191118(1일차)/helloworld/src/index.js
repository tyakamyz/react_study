import React from 'react';
// dom 구조로 출력
import ReactDOM from 'react-dom';
import './index.css';

// App.js를 가져온다.
import App from './App';
import * as serviceWorker from './serviceWorker';

/* 컴포넌트를 페이지에 랜더링한다. */
// App.js에서 정의한 'App'이라는 이름의 컴포넌트를 HTML 태그처럼 사용한다.
// -> 첫 번째 파라미터 : 사용할 컴포넌트
// -> 두 번째 파라미터 : 컴포넌트를 출력할 index.html 페이지에 정의되어 있는 요소
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
