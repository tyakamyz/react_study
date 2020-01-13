import React from 'react';
import KakaoImageSearch from './pages/KakaoImageSearch';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        <h1>Redux Ajax Tutorial</h1>

        <Switch>
          {/* 검색폼의 submit 이벤트가 발생하게 되면 검색어를 path 파라미터로 전달하게 된다.
              검색파라미터가 존재할 경우에 대한 변수이름을 query로 지정한다 */}
          <Route path='/:query?' component={KakaoImageSearch} />
        </Switch>
    </div>
  );
}

export default App;