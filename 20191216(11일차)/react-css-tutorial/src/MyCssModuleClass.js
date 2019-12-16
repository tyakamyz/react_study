import React from 'react';

import myStyle from './assets/css/myStyle.module.css';

/**
 * 외부 CSS 파일을 활용하는 컴포넌트
 */
const MyCssModuleClass = () => {
    const avengers = ['아이언맨', '캡틴 아메리카', '토르', '헐크'];

    return (
        <div>
            <h2>MyCssModuleClass</h2>

            <h3>외부 CSS 파일을 통한 클래스 참조하기</h3>

            {/* 정적 css파일을 참조할 경우 클래스 이름은 문자열로 지정 */}
            <ul className={myStyle.world}>
                {avengers.map((item, index) => {
                    return <li key={index} className={myStyle.hello}>{item}</li>
                })}
            </ul>

            <h3>CSS 백그라운드 이미지</h3>
            {/* :global 키워드가 적용된 클래스는 정적 클래스로 접근 가능함. className="my-css-box" */}
            <div className="my-css-box" />

            <h3>다중 클래스 적용</h3>
            <div className={`${myStyle.style} ${myStyle.size_x} ${myStyle.size_y}`} />

            <div className={[myStyle.style, myStyle.size_x, myStyle.size_y].join(' ')} />

            <hr />
        </div>
    );
};

export default MyCssModuleClass;