import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';        // App.js 파일을 불러와서 App으로 정의함
import * as serviceWorker from './serviceWorker';
import MyFragment1 from './MyFragment1';
import MyFragment2 from './MyFragment2';
import MyExpression1 from './MyExpression1';
import MyExpression2 from './MyExpression2';
import MyInlineStyle1 from './MyInlineStyle1';
import MyInlineStyle2 from './MyInlineStyle2';
import './my_class.css';
import MyCssClass from './MyCssClass';
import MyIf1 from './MyIf1';
import MyIf2 from './MyIf2';
import MyIf3 from './MyIf3';
import MyIf4 from './MyIf4';
import MyLoop1 from './MyLoop1';

ReactDOM.render(<App />, document.getElementById('root'));  // 정의한 App을 root에 넣어줌 => root는 public/index.html에 있음
ReactDOM.render(<MyFragment1 />, document.querySelector('#my-fragment1'));
ReactDOM.render(<MyFragment2 />, document.querySelector('#my-fragment2'));
ReactDOM.render(<MyExpression1 />, document.querySelector('#my-expression1'));
ReactDOM.render(<MyExpression2 />, document.querySelector('#my-expression2'));
ReactDOM.render(<MyInlineStyle1 />, document.querySelector('#my-inlinestyle1'));
ReactDOM.render(<MyInlineStyle2 />, document.querySelector('#my-inlinestyle2'));
ReactDOM.render(<MyCssClass />, document.querySelector('#my-cssclass'));
ReactDOM.render(<MyIf1 />, document.querySelector('#my-if1'));
ReactDOM.render(<MyIf2 />, document.querySelector('#my-if2'));
ReactDOM.render(<MyIf3 />, document.querySelector('#my-if3'));
ReactDOM.render(<MyIf4 />, document.querySelector('#my-if4'));
ReactDOM.render(<MyLoop1 />, document.querySelector('#my-loop1'));

serviceWorker.unregister();
