import React from 'react';

const MyCssClass = () => {
    // App.css 에 있는 클래스 참조하기
    // class="" 가 아닌 className="" 로 해야 적용됨. (최신버전은 class만 사용해도 무관.)
    return (
        <div>
            <h2 className="my-style">CSS 클래스 적용하기</h2>
        </div>
    );
};

export default MyCssClass;