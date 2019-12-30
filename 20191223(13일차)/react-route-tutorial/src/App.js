import React from 'react';
/**
 * Route : 특정 URL에 컴포넌트를 분배하는 기능.
 * Link : Route 기반의 링크 생성
 * Switch : 지정되지 않은 URL에 대표 컴포넌트를 대응 시키는 기능 (404페이지)
 */
import { Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Department1 from './pages/Department1.js';
import Department2 from './pages/Department2.js';
import Professor from './pages/Professor.js';
import HistoryClass from './pages/HistoryClass.js';
import HistoryFunction from './pages/HistoryFunction.js';
import PageNotFound from './pages/PageNotFound.js';

// SPA 기반에서는 <a> 태그 대신 react-router-dom의 기본 컴포넌트인 <Link>를 사용해야 한다.
// <a>를 사용하는 경우 실제 페이지 리프레시가 발생하게 되고,
// <Link>를 사용하는 경우 Route 기능을 통해 SPA가 구동된다.

function App() {
    return (
        <div>
            <h1>Hello Route</h1>
            <Link to="/">[home]</Link>
            <Link to="/about">[about]</Link>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
            <Link to="/department1?deptno=101&msg=hello">[컴퓨터공학과]</Link>
            <Link to="/department1?deptno=102&msg=world">[멀티미디어학과]</Link>
            {/* PATH 파라미터를 포함하는 링크 구성 */}
            <Link to="/department2/201/hello">[전자공학과]</Link>
            <Link to="/department2/202/world">[기계공학과]</Link>
            <Link to="/professor">[교수소개]</Link>
            <Link to="/history/class">[History.Class]</Link>
            <Link to="/history/function">[History.Function]</Link>

            <hr/>

            <Switch>
                {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
                <Route path='/' component={Home} exact={true} />
                <Route path='/about' component={About} />
                <Route path='/department1' component={Department1} />
                <Route path='/department2/:deptno/:msg' component={Department2} />
                <Route path='/professor' component={Professor} />
                <Route path='/history/class' component={HistoryClass} />
                <Route path='/history/function' component={HistoryFunction} />

                {/* path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응 */}
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
