import React, { Component } from "react";

/**
 * props : 컴포넌트를 사용하는 부모에 의해 전달받는 변수.
 *         컴포넌트 내부에서 변경할 수 없다.
 *
 * state : 컴포넌트 내부에서 자체적으로 사용하는 변수.
 *         함수형 컴포넌트에서는 사용할 수 없다.
 *         (리액트 최신 버전부터 useState나 Hook이라는 기능으로 사용 가능.)
 */

class MyState1 extends Component {
  /** 생성자 - 클래스의 객체가 생성될 때 자동으로 실행되는 특수한 함수 */
  constructor(props) {
    //클래스형 컴포넌트에서 생성자를 작성할 때는 반드시 호출
    super(props);

    /** state값 정의 -> 사용하고자 하는 변수들을 JSON 형식으로 정의 */
    this.state = {
      my_number: 0,
      my_time: new Date().toString()
    };
  }

  render() {
    return (
      <div>
        {this.state.my_number}회 눌러짐 :{" "}
        <i>
          <small>{this.state.my_time}</small>
        </i>
        <button
          onClick={() => {
            // 준비한 state값에 대한 변경 처리
            this.state.my_number++;
            this.state.my_time = new Date().toString();
            console.log(this.state.my_time); // console.log로는 변하는게 보이지만 화면상에는 변화가 없음.

            // 변경 결과를 화면에 반영하고 싶은 항목들만 별도의 json으로 묶는다.
            // key 이름은 개발자 임의로 지정한다.
            const my_data = {
              a: this.state.my_time,
              b: this.state.my_number
            };
            // json외에 배열도 사용 가능함.
            // -> ex) const my_date = this.state.my_time, this.state.my_number];

            // 준비한 json을 전달한다. --> json 안에 있는 값이 화면에 반영된다.
            this.setState(my_data);
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyState1;
