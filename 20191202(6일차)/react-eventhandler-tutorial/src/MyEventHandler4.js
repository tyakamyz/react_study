import React from "react";

class MyEventHandler4 extends React.Component {
  state = {
    myMessage: "Hello World"
  };

  // createRef() 함수를 통해 참조변수를 생성
  myCopyArea = React.createRef();

  render() {
    let { myMessage } = this.state;

    return (
      <div>
        <h2>MyEventHandler4</h2>

        {/** ref 속성을 통해 myInput 이라는 참조변수를 생성 */}
        <input
          type="text"
          ref={ (ref) => this.myInput=ref}
          placeholder="input any message"
          onChange={e => {
            myMessage = e.target.value;
            this.setState({ myMessage });

            // React.createRef()를 통해 생성한 참조변수는 current라는 속성을 통해 DOM에 접근한다.
            this.myCopyArea.current.value = myMessage;
          }}
        />

        {/** createRef() 함수로 생성한 참조 변수 연결 */}
        <input type='text' placeholder='copy area'
        ref={this.myCopyArea}
        readOnly />

        <button type="button" onClick={ e => {
            myMessage = '';
            this.setState({myMessage});
            //생성된 참조변수를 통해 <input>요소에 접근
            this.myInput.value = '';
            this.myCopyArea.current.value = '';
        }}>Clear</button>
        <p>{myMessage}</p>
        <hr />
      </div>
    );
  }
}

export default MyEventHandler4;
