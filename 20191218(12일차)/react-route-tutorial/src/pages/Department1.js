import React from 'react';

// QueryString 값을 식별할 수 있는 패키지 참조
// --> 참조 에러시 npm install --save qs
import qs from 'qs';

// 한 페이지에서 GET파라미터에 따라 다르게 표현할 컨텐츠 준비
// --> 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야 함(Ajax)
const departmentList = {
    item: [
        {deptno: 101, dname: '컴퓨터공학과', loc: '1호관'},
        {deptno: 102, dname: '멀티미디어학과', loc: '2호관'}
    ]
}

const Department1 = (props) => {

    /* 컴포넌트로 전달되는 props에는 기본적으로 location객체가 포함되어 있다 */
    // --> QueryString값을 받아온다
    const queryString = props.location.search;      // search를 사용하면 url주소 ?부터 가져온다 ex) www.naver.com?value=1   ->  ?"value=1" 을 가져옴
    console.log(queryString);
    
    // QueryString을 Json 객체 형태로 변환
    const query = qs.parse(queryString, {
        ignoreQueryPrefix: true     // 맨 앞의 "?"를 제거하고 get 파라미터 값을 json형태로 만들어줌
    });
    console.log(query);

    // 필요한 변수값과 타입 확인
    console.log("요청된 학과번호 값=%s (%s)", query.deptno, typeof query.deptno);

    // 미리 준비된 JSON 객체에서 요청정보(query.deptno)와 동일한 deptno값을 갖는 객체를 조회
    const deptno = parseInt(query.deptno);
    let departmentItem = null;

    departmentList.item.forEach((item, index) => {
        if(item.deptno == deptno){
            departmentItem = item;
            return;
        }
    });

    if(!departmentItem){
        return <h1>404 Page Not Found!!</h1>;
    }

    return(
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.deptno}</li>
                <li>학과번호: {departmentItem.loc}</li>
            </ul>
        </div>
    )
}

export default Department1;