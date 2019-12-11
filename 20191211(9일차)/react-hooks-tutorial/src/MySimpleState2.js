import React from 'react';
import MyVisible from './MyVisible'

const MySimpleState2 = () => {
    // MyVisible을 화면에 표시할지 여부를 결정하기 위한 상태값 정의
    const [display, setDisplay] = React.useState(true);

    return (
        <div>
            <button type="button" onClick={e=> {
                setDisplay(!display);
            }}>{display ? 'Hide' : 'Show'} </button>

            {/** 상태값에 따라 MyVisible에 대한 표시(마운트), 표시안함(언마운트) */}
            {/** javascript에서 display none하는것과는 다른개념. html소스가 남아있지않고 삭제시킴(언마운트) */}
            {display && <MyVisible />}

            <hr />
        </div>
    );
};

export default MySimpleState2;