import React from 'react';
import MyInlineCss from './MyInlineCss';
import MyCssClass from './MyCssClass';
import MyCssModuleClass from './MyCssModuleClass';
import MyScss from './MyScss';
import MyScssModule from './MyScssModule';
import MyStyledComponenet1 from './MyStyledComponenet1';
import MyStyledComponenet2 from './MyStyledComponenet2';

function App() {
  return (
    <div className="App">
      <MyInlineCss />
      <MyCssClass />
      <MyCssModuleClass />
      <MyScss />
      <MyScssModule />
      <MyStyledComponenet1 />
      <MyStyledComponenet2 />
    </div>
  );
}

export default App;
