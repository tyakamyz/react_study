import React from 'react';

import MyProTypes1 from './MyProTypes1';
import MyProTypes2 from './MyProTypes2';

import MyState1 from './MyState1';
import MyState2 from './MyState2';
import MyState3 from './MyState3';
import MyState4 from './MyState4';
import MyState5 from './MyState5';

function App() {

  const message = "Hello Component2";

  return (
    <div className="App">
      <h1>{message}</h1>
      <hr />
      <h2>컴포넌트 타입 지정</h2>
      <MyProTypes1 name="시현">React Hi</MyProTypes1>
      {/** 문자열 타입에 숫자값 전달하기 - 개발자도구를 통해 경고 메시지 확인 가능함. */}
      <MyProTypes2 name="{123}"></MyProTypes2>    {/** name = {123}은 문자열.  name = 123은 문법 에러 */}
      
      <hr />
      <h2>State (class 형식에서만 가능)</h2>
      <MyState1 />
      <MyState2 />
      <MyState3 />
      <h2>함수형 컴포넌트에서의 State</h2>
      <MyState4 />
      <MyState5 />
    </div>
  );
}

export default App;
