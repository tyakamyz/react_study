import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 리액트 컴포넌트를 구성하는 스크립트
 */
//function App() {
//const App = function(){       //ES5 스타일의 함수 정의
const App = () => {
    // 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다.
    // --> 컴포넌트가 리턴하는 요소가 여러 개의 태그에 대한 조합형이라면 반드시 하나의 부모 요소로 감싸야 한다.
    // 출력하는 태그 내용이 한 줄이라면 괄호는 생략 가능함.
  return (
    // 리턴에 감싸주는 부모요소가 항상 필요. 없으면 리액트에서는 에러로 인식. ex) <div></div>
    <div>
      <h2> Hello React </h2>
      <h3> 안녕 리액트~!!</h3>
    </div>
  );
}

export default App;
