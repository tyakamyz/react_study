import React from 'react';

// src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// -> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from './assets/img/sample.png'

/**
 * MyInlineCss
 *  - HTML 요소에 inline 방식으로 css 적용하기
 */
const MyInlineCss = () => {
    // CSS로 사용될 JSON 객체 정의
    // --> CSS속성이름은 바닐라스크립트의 프로퍼티 이름을 지정해야 함.
    //     document.getElementById("hello").style.backgroundColor = "#ff00ff";
    const MyStyle = {
        backgroundColor: '#f00',
        fontSize: '20px',
        color: '#0f0',
        fontWeight: 'bold',
        padding: '10px 25px',
        marginBottom: '10px'
    };

    return (
        <div>
            <h2>MyInlineCss</h2>

            <h3>이미지 참조하기</h3>
            {/* 이미지 사용시 alt 속성을 지정 안하면 경고 발생함 */}
            <img src={sample} alt="ryan" style={{width: '200px'}}/>

            {/* public 폴더에 있는 파일들을 단순 절대경로로 참조 가능함 (폴더 생성 가능)
              * 이 경우 개발자도구로 확인 시 경로가 그대로 노출됨.*/}
            <img src="/logo192.png" alt="react" />
            <hr />

            {/* HTML속성에 react변수를 적용할 경우 따옴표 X */}
            <div style={MyStyle}>Hello React Css (1)</div>

            <div style={{backgroundColor: '#ff0',
                         fontSize: '20px',
                         color: '#00f',
                         fontWeight: 'bold',
                         padding: '10px 25px',
                         marginBottom: '10px'}}>Hello React Css (2)</div>
        </div>
    );
};

export default MyInlineCss;