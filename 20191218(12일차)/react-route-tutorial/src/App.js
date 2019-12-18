import React from 'react';
import {Route, Link} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Department1 from './pages/Department1.js';

/**
 * SPA(Single Page Application) 기반에서는 <a> 태그 대신 react-router-dom의 기본 컴포넌트인 <Link>를 사용해야한다.
 * <a> 태그를 사용하는 경우 실제 페이지에서는 리프레시(새로고침)이 발생하게 되고,
 * <Link>를 사용하는 경우는 Route 기능을 통해 SPA가 구동된다.
 */

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Link to="/">[home]</Link>
      <Link to="/about">[about]</Link>
      {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용 불가) */}
      <Link to="/department1?deptno=101&msg=hello">[컴퓨터공학과]</Link>
      <Link to="/department1?deptno=102&msg=world">[멀티미디어학과]</Link>

      <hr />

      {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
      <Route path="/" component={Home} exact={true} />    {/* exact={true}가 없으면 다른페이지에 /about을 입력하면 /가 Home이기 때문에 Home 페이지가 같이나옴 */}
      <Route path="/about" component={About} />
      <Route path="/department1" component={Department1} />
    </div>
  );
}

export default App;
