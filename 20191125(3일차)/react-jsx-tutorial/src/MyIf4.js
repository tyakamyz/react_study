import React from 'react';

const MyIf4 = () => {
    /**
     * 출력할 내용이 없는 경우
     * 어떠한 처리 과정을 거쳐 게시글의 목록을 가져온 결과값을 가짐.
     * -> undefined, null, 0, false, ''(빈문자열) 중 하나를 return 할 경우
     * -> 특히 undefined 변수를 바로 리턴하는 경우 에러 발생함
     */

    const articleList = undefined;
    
    // '||' 연산자를 사용해서 값이 존재하지 않을 경우를 대비. 
    return (
            articleList || (<h2>조회된 게시글이 없습니다.</h2>)
    );
};

export default MyIf4;