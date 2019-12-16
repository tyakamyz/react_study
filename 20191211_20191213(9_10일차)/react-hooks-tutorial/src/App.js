import React from 'react';

import MySimpleState1 from './MySimpleState1';
import MySimpleState2 from './MySimpleState2';
import MySimpleReduce1 from './MySimpleReduce1';
import MySimpleReduce2UseState from './MySimpleReduce2UseState';
import MySimpleReduce2 from './MySimpleReduce2';
import MySimpleMemo from './MySimpleMemo';
import MySimpleRef1 from './MySimpleRef1';
import MySimpleRef2 from './MySimpleRef2';

function App() {
  return (
    <div className="App">
      <MySimpleState1 />
      <MySimpleState2 />
      <MySimpleReduce1 />
      <MySimpleReduce2UseState />
      <MySimpleReduce2 />
      <MySimpleMemo />
      <MySimpleRef1 />
      <MySimpleRef2 />
    </div>
  );
}

export default App;
