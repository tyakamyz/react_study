import React from 'react';

const MyIf3 = () => {
    /**
     * 삼항 연산자 사용
     * {조건 ? (조건이 참인 경우 출력할 내용) : (그렇지 않은 경우 출력할 내용)}
     * --> 조건이 거짓인 경우를 사용하지 않고자 한다면 null 사용
     * ex) {point == 80 ? (...) : (null)}
     */

    const isLogin = true;

    return (
        <div>
            {
                isLogin==true ? (
                    <button type="button">로그아웃</button>
                ) : (
                    <button type="button">로그인</button>
                )
            }
        </div>
    );
};

export default MyIf3;