import React, { Component } from "react";

class MyState3 extends Component {
  state = {
    my_number: 0,
    my_time: new Date().toString()
  };

  render() {
    let { my_number, my_time } = this.state;

    return (
      <div>
        {my_number}회 눌러짐 :{" "}
        <i>
          <small>{my_time}</small>
        </i>
        {/** onClick 이벤트 정의 - 콜백함수 전달해야 함 */}
        <button
          onClick={() => {
            my_number++;
            my_time = new Date().toString();

            // 전달되는 파라미터를 함수형으로 정의
            // prevState : 이전 상태값
            // props : 현재 상태값
            this.setState((prevState, props) => {
              return {"my_number": prevState.my_number+1}
            });

            // 앞에서 변경한 상태값을 그대로 이어 받아서 진행함.
            this.setState((prevState) => {
              return {"my_number": prevState.my_number+1};
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyState3;
