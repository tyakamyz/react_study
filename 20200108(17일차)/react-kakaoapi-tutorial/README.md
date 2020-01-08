# 초기화 작업

 - 프로젝트 폴더 안에서 route 설치
    npm install --save react-router-dom
    npm install --save styled-components
    npm install --save axios

 - /src 폴더 안에서 App.css, index.css, logo.svg 삭제
 - App.js 파일과 index.js 파일에서 삭제한 파일 관련 구분 삭제
 - index.js 파일에서 다음의 구문 추가
    import { BrowserRouter } from 'react-router-dom';

 - index.js 파일에서 <App />을 <BrowserRouter><App /></BrowserRouter>로 변경
 - App.js 파일에 다음을 추가
    import { Route, Link, Switch } from 'react-router-dom';