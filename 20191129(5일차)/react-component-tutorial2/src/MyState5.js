import React, {useState} from 'react';

const MyState5 = () => {
  // useState() 함수에 myColor의 초기값을 넣어준다. (숫자, 문자열, 객체, 아무거나...)
  // --> 배열이 반환된다.
  //     myColor : 현재 상태
  //     setMyColor : MyColor에 대한 setter 함수
  const [myColor, setMyColor] = useState('#f00');
  const [myMessage, setMyMessage] = useState('안녕 리액트');

  return (
    <div>
        <h4 style={{color : myColor}}>{myMessage}</h4>
        <button onClick={() => setMyColor('#f00')}>빨강</button>
        <button onClick={() => setMyColor('#0f0')}>초록</button>
        <button onClick={() => setMyColor('#00f')}>파랑</button>
        <button onClick={() => setMyMessage('안녕 리액트')}>한글</button>
        <button onClick={() => setMyMessage('Hello React')}>영어</button>
    </div>
  );
};

export default MyState5;