import React from 'react';
import MyInlineCss from './MyInlineCss';
import MyCssClass from './MyCssClass';
import MyCssModuleClass from './MyCssModuleClass';
import MyScss from './MyScss';
import MyScssModule from './MyScssModule';

function App() {
  return (
    <div className="App">
      <MyInlineCss />
      <MyCssClass />
      <MyCssModuleClass />
      <MyScss />
      <MyScssModule />
    </div>
  );
}

export default App;
