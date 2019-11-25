import React from 'react';

function btnLogin(isLogin){
    if(isLogin == true){
        return (<button type="button">Logout</button>);
    }else{
        return (<button type="button">Login</button>);
    }
}

const MyIf1 = () => {
    // 조건에 따라 다른 결과를 표시하는 첫 번째 방법은 호출하는 함수안에서 판별.
    return (
        <div>
            {btnLogin(true)}
        </div>
    );
};

export default MyIf1;