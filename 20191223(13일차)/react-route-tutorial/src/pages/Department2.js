import React from 'react';

const departmentList = {
    item: [
        { deptno: 201, dname: '전자공학과', loc: '3호관' },
        { deptno: 202, dname: '기계공학과', loc: '4호관' }
    ]
};

const Department2 = props => {
    // url파라미터는 props의 match.params객체로 내장되어있다.
    const urlParams = props.match.params;

    // {deptno: "202", msg: "world"}
    console.log(urlParams);

    // 전달된 deptno값과 일치하는 데이터를 갖는 항목을 찾아서 departmentItem에 복사
    let departmentItem = null;
    departmentList.item.forEach((item, index) => {
        if (item.deptno === parseInt(urlParams.deptno)) {
            departmentItem = item;
            return;
        }
    });

    if (!departmentItem) {
        return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
    }

    return (
        <div>
            <h2>{departmentItem.dname}</h2>
            <ul>
                <li>학과번호: {departmentItem.deptno}</li>
                <li>학과위치: {departmentItem.loc}</li>
            </ul>
        </div>
    );
};

export default Department2;
