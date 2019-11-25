import React from 'react';

const MyInlineStyle1 = () => {
    const message = "헬로 리액트!!!";

    // Json형식으로 CSS 구성 --> 속성 이름은 JS스타일인 카멜표기법에 따름. ( '-' 대신 대문자를 쓰는 표기법)
    const style = {
        backgroundColor: 'gray',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,    // 단위 생략(px)
        margin: 0
    };

    return (
        <div>
            <h2 style={style}>{message}</h2>    
        </div>
    );
};

export default MyInlineStyle1;