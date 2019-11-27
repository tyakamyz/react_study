//component 클래스 참조
import React, {Component} from 'react';   // form 'react'란 node_modules/react 폴더를 의미
                                          // 그 안에 있는 index.js를 참조함. <srcript src="/node_modules/react/index.js" /> 와 비슷하다고 생각하면됨
                                          // 그 안에 있는 React, {component}를 가져옴. class를 선택해서 선언하는 것 이 가능함.
// component 클래스를 상속받는 App 클래스 정의

import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent1';

import MyComponentProps1 from './MyComponentProps1';
import MyComponentProps2 from './MyComponentProps2';

import MyDefaultProps1 from './MyDefaultProps1';
import MyDefaultProps2 from './MyDefaultProps2';

import MyChildren1 from './MyChildren1';
import MyChildren2 from './MyChildren2';

import MyUnstructed1 from './MyUnstructed1';
import MyUnstructed2 from './MyUnstructed2';

class App extends Component {
    // 컴포넌트로 사용되는 클래스는 반드시 'render()' 함수를 정의해야 함.
    // --> JSX 반환용.
    render(){
        const message = 'Hello Component';
        return(
          <div>
              <h1>{message}</h1>

              {/* JSX에서는 주석을 {}로 감싸야함 */}
              <h2>컴포넌트 파악하기</h2>
              <MyComponent1 />
              <MyComponent2 />
              <hr />

              <h2>컴포넌트 속성 사용하기</h2>
              <MyComponentProps1 name="시현" age="30" />
              <MyComponentProps2 name="시현" age="30" />
              <hr />

              <h2>컴포넌트 속성없을 경우 기본값 사용하기</h2>
              <MyDefaultProps1 />
              <MyDefaultProps2 />
              
              <h2>컴포넌트 Children 사용하기</h2>
              <MyChildren1 width="200" height="30" ></MyChildren1>
              <MyChildren2 width="200" height="30" >안녕하세요. 리액트</MyChildren2>
              <hr />

              <h2>컴포넌트 비구조문법 사용하기</h2>
              <MyUnstructed1 />
              <MyUnstructed2 color="#00f">안녕하세요. children</MyUnstructed2>
              <hr />
          </div>
        );
    }
}

export default App;