import React from 'react';      // <script src="js/react.js" /> 와 같은 ES6 문법
import logo from './logo.svg';  // 경로일 경우 ./ 등 경로를 붙여주지만
import './App.css';             // node_modules에서 가져올경우 react 같은 식으로 사용

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
