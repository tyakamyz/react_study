import React from 'react';

const MyArrayComponent3 = props => {

    const avengers = ['아이언맨','캡아','토르','헐크'];

    return (
        <div>
            <h2>MyArrayComponent3</h2>
             {/** 다른 컴포넌트를 참조한다. */}
             {avengers.map((item, index) => {
                 return <ul><MyAvengersItem  key={index} name={item} /></ul>
             })}
            <hr />
        </div>
    );
};

// 이 부분을 다른 js 파일로 추출한 다음 import 처리해 사용할 수 도 있다.
const MyAvengersItem = props => {
    return <li>{props.name}</li>;
};

export default MyArrayComponent3