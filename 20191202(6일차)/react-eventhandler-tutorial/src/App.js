import React from 'react';

import MyEventHandler1 from './MyEventHandler1';
import MyEventHandler2 from './MyEventHandler2';
import MyEventHandler3 from './MyEventHandler3';
import MyEventHandler4 from './MyEventHandler4';

const App = () => {
  return (
    <div className="App">
      <h1>React Event Handler Tutorial</h1>
      <MyEventHandler1 />
      <MyEventHandler2 />
      <MyEventHandler3 />
      <MyEventHandler4 />
    </div>
  );
}

export default App;