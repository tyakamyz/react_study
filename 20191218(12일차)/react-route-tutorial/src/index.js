import React from 'react';
import ReactDOM from 'react-dom';

// route를 사용하기 위해 import
// --> HTML5의 History API를 사용하여 페이지 새로고침 없이 URL을 변경하고,
//     현재 URL에 관련된 정보를 props로 조회하거나 활용할 수 있게 하는 기능을 제공한다.
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter> {/** router를 사용하기위해서는 <BrowserRouter>로 감싸야함 */}
        <App />
    </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();