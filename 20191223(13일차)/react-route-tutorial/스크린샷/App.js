import React from 'react';
/**
 * Route : 특정 URL에 컴포넌트를 분배하는 기능.
 * Link : Route 기반의 링크 생성
 * NavLink : ":active" 가상 클래스를 적용해서 현재 메뉴를 css로 강조하는 기능
 * Switch : 지정되지 않은 URL에 대표 컴포넌트를 대응 시키는 기능 (404페이지)
 */
import { Route, Link, NavLink, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Department1 from './pages/Department1.js';
import Department2 from './pages/Department2.js';
import Professor from './pages/Professor.js';
import HistoryClass from './pages/HistoryClass.js';
import HistoryFunction from './pages/HistoryFunction.js';
import PageNotFound from './pages/PageNotFound.js';

/**
 * NavLink에서 "/"와 "/경로명" 을 함께 처리는 문제를 해결하기 위한 사용자 정의 함수
 */
const PathNavLink = props => {
    // 컴포넌트에 전달되는 props값 중 to와 현재 active된 URL이 일치할 경우만 isActive를 true로 설정
    return (
        <NavLink isActive={(_, { pathname }) => pathname === props.to} {...props} />
    );
};

// SPA 기반에서는 <a> 태그 대신 react-router-dom의 기본 컴포넌트인 <Link>를 사용해야 한다.
// <a>를 사용하는 경우 실제 페이지 리프레시가 발생하게 되고,
// <Link>를 사용하는 경우 Route 기능을 통해 SPA가 구동된다.

function App() {
    // 현재 메뉴에 적용할 CSS 정의
    const activeStyle = {
        background: '#f60',
        color: '#fff',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h1>Hello Route</h1>
            <PathNavLink activeStyle={activeStyle} to="/">[home]</PathNavLink>
            <PathNavLink activeStyle={activeStyle} to="/about">[about]</PathNavLink>
            {/* HTTP GET 파라미터를 포함하는 링크 구성 (한글사용X) */}
            <PathNavLink activeStyle={activeStyle} to="/department1?deptno=101&msg=hello">[컴퓨터공학과]</PathNavLink>
            <PathNavLink activeStyle={activeStyle} to="/department1?deptno=102&msg=world">[멀티미디어학과]</PathNavLink>

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
