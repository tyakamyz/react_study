import React from 'react';

/*
 * 출력할 HTML 태그를 모두 변수에 포함한 형태로 리턴하는 형태
*/

const MyFragment2 = () => {
    // myTag가 undefined일 경우 에러. null은 허용. 화면에 null 컴포넌트가 표시되지 않음)
    const myTag = (<>
        <h2>변수에 포함된 내용을 출력합니다.</h2>
        <p>잘 되는지 보겠습니다.</p>
    </>)
    return myTag;
};

export default MyFragment2;