import React from 'react';

const MySimpleRef1 = () => {
    const myInputRef = React.useRef(null);
    
    return (
        <div>
           <h2>MySimpleRef1</h2>

           {/** 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
           <input type="text" ref={myInputRef} />

           {/** 버튼 클릭 시 input의 내용을 alert()으로 표시 후 입력 내용 지움 */}
           <button onClick={ e => {
               // 컴포넌트 참조변수를 사용해서 다른 HTML 태그에 접근 가능
               // -> "참조변수.current" 해당 HTML을 의미하는 javascript DOM 객체 (HTML 그자체)
               console.log(myInputRef);
               alert(myInputRef.current.value);
               myInputRef.current.value = "";
           }}>클릭</button>
           <hr />
        </div>
    );
};

export default MySimpleRef1;