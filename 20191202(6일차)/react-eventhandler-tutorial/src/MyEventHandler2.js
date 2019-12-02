import React from "react";

const MyEventHandler2 = () => {
  const [myMessage, setMyMessage] = React.useState("");

  return (
    <div>
      <h2>MyEventHandler2</h2>
      <p>입력 내용이 출력됩니다.</p>
      <input
        type="text"
        id="my_input"
        placeholder="input any message"
        onChange={e => {
          console.log(e);
          setMyMessage(e.target.value);
        }}
      />
      <button type='button' onClick={ e => {
          console.clear();
          setMyMessage('');
          document.getElementById("my_input").value="";
      }}
      onKeyPress = { e => {
          // 한글에서 반응안함
          console.log("key press >> " + e.target.value);
      }}
      onKeyDown = { e => {
          // 입력값을 가질 수 없음.
          console.log("key down >> " + e.target.value);
      }}
      onKeyUp = { e => {
          // 입력값을 가질 수 있음. up 사용 권장
          console.log("key up >> " + e.target.value);
      }}
      >Clear</button>
      <p>{myMessage}</p>
    </div>
  );
};

export default MyEventHandler2;
