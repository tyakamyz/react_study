import React from 'react';

import MyArrayComponent1 from './MyArrayComponent1';
import MyArrayComponentClass1 from './MyArrayComponentClass1';
import MyArrayComponent2 from './MyArrayComponent2';
import MyArrayComponentClass2 from './MyArrayComponentClass2';
import MyArrayComponent3 from './MyArrayComponent3';
import MyArrayComponentClass3 from './MyArrayComponentClass3';
import MyJsonArrayComponent from './MyJsonArrayComponent';
import MyJsonArrayComponentClass from './MyJsonArrayComponentClass';
import MyContacts from './MyContacts';
import MyContactsClass from './MyContactsClass';

function App() {
  return (
    <div>
      <MyArrayComponent1 />
      <MyArrayComponentClass1 />
      <MyArrayComponent2 />
      <MyArrayComponentClass2 />
      <MyArrayComponent3 />
      <MyArrayComponentClass3 />
      <MyJsonArrayComponent />
      <MyJsonArrayComponentClass />
      <MyContacts />
      <MyContactsClass />
    </div>
  );
}

export default App;
