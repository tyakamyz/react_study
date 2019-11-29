import React, {useState} from 'react';

/** 함수형 컴포넌트에서의 state 사용 */
const MyState4 = () => {
  // useState() 함수에 sate의 초기값을 넣어준다. (숫자, 문자열, 객체 아무거나..)
  // --> 배열이 반환된다. (중요!!!!!!!!!!!!!! 배열로 반환됨)
  //     state : 현재 상태
  //     setState : state에 대한 setter 함수
  //     변수이름 임의로 설정가능
  const [state, setState] = useState('여기에 넣어주는 초기값은 생략가능함');

  // 버튼이 눌러졌을 때 호출될 함수 정의
  const onLoginClick = () => {
    // 바꾸고싶을때 정의해둔 setState로 바로 변경가능
    return setState("로그인 되었습니다.");
  };

  // 화살표 함수 안에서 특별한 처리 없이 바로 리턴만 한다면 중괄호와 return 키워드 생략 가능.
  const onLogoutClick = () => setState("로그아웃 되었습니다.");

  return (
    <div>
      <h4>{state}</h4>
      
      <button onClick={onLoginClick}>로그인</button>
      <button onClick={onLogoutClick}>로그아웃</button>
    </div>
  );
};

export default MyState4;