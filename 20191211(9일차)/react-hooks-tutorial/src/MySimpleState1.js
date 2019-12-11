/**
 * npm start 혹은 yarn start
 *  - 개발용 실행 모드 (MS브라우저 지원 안함.)
 * 
 * npm run build
 *  - 배포를 위한 패키징 (edge는 지원함.)
 *  - 명령 수행 후 build라는 폴더가 생성되고 이 폴더의 항목들을 웹 서버에 업로드 하여 실행 가능
 *  - 빌드 결과물을 확인하기 위해서는 build 폴더 안에 live-server 구동으로 확인 가능
 */

// IE11 브라우저 지원 기능 추가
// >> npm install --save react-app-polyfill
import 'react-app-polyfill/ie9';      // ie9로해야 ie11에서 잘먹힘
import 'react-app-polyfill/stable';

import React from 'react';

const MySimpleState1 = () => {
    const [myName, setMyName] = React.useState('리액트');
    const [myPoint, setMyPoint] = React.useState(50);

    /** useEffect의 기본 상태. 컴포넌트가 마운트, 업데이트 될 때 마다 실행된다. */
    // 즉, state값이 변경될 때 마다 실행된다.
    React.useEffect(()=>{

        // $.ajax(...)

        console.log("[MySimpleState1] 컴포넌트가 마운트/업데이트 되었습니다.");
        console.log("[MySimpleState1] :::: myName=%s, myPoint=%s", myName, myPoint);
    });

    /** 기본 상태. 컴포넌트가 마운트 될 때만 실행된다. 즉, 화면이 구성될 때 최초 1회만 실행된다. */
    React.useEffect(() => {
        console.log("[MySimpleState1] 컴포넌트가 마운트 되었습니다.");
    }, []);

    /** 특정 상태 값이 변경된 경우만 실행하기. 즉, myName 값이 변경될 경우만 실행한다. */
    React.useEffect(() => {
        // myName값이 변경될때마다 실행. ex) 값이 바뀔때마다 저장하는 기능
        console.log("[MySimpleState1] myName값이 변경되었습니다.");
        console.log("[MySimpleState1] :::: myName=%s", myName);
    }, [myName]);

      /** 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 실행된다. */
      React.useEffect(() => {
        //함수를 리턴한다. (클로저)
        return () => {
            console.log("[MySimpleState1] Cleanup >> 컴포넌트가 언마운트되거나 업데이트 되기 직전입니다.");
            console.log("[MySimpleState1] :::: myNmae=%s, myPoint=%s", myName, myPoint);
        }
    });

    return (
        <div>
            <h2>MySimpleState1</h2>

            <div>
                <label htmlFor="myNameInput">이름 : </label>
                <input type="text" value={myName} onChange={e => {
                    // target은 react가 제공하는 객체
                    // currentTarget은 ES6가 제공하는 객체 (권장)
                    setMyName(e.currentTarget.value);
                }} />
            </div>

            <div>
                <label htmlFor="myPointInput">점수 : </label>
                <input id="myPointInput" type="range" min="0" max="100" value={myPoint} step="1" onChange={e => {
                    setMyPoint(e.currentTarget.value);
                }} />
            </div>

            <h3>{myName}님의 점수는 {myPoint}점 입니다.</h3>
            <hr />
        </div>
    );
};

export default MySimpleState1;