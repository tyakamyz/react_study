import React from 'react';

// 외부 css파일 참조
import './assets/css/myStyle.css';

/**
 * 외부 CSS 파일을 활용하는 컴포넌트
 */
const MyCssClass = () => {
    const avengers = ['아이언맨', '캡틴 아메리카', '토르', '헐크'];

    return (
        <div>
            <h2>MyCssClass</h2>

            <h3>외부 CSS 파일을 통한 클래스 참조하기</h3>

            {/* 정적 css파일을 참조할 경우 클래스 이름은 문자열로 지정 */}
            <ul className="world">
                {avengers.map((item, index) => {
                    return <li key={index} className="hello">{item}</li>
                })}
            </ul>

            <h3>CSS 백그라운드 이미지</h3>
            <div className="my-css-box" />
            <hr />
        </div>
    );
};

export default MyCssClass;