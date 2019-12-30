import React from 'react';
import MyWithRouter from './MyWithRouter.js';

const professorList = {
    item: [
        { profno: 9901, name: '김도훈', position: '교수' },
        { profno: 9902, name: '이재우', position: '조교수' }
    ]
};
/**
 * 다른 컴포넌트(Professor)에 의해 Route될 서브 컴포넌트
 * @param {*} props
 */
const ProfessorItem = props => {
    // path 파라미터
    const urlParams = props.match.params;
    console.log(urlParams);

    // 전달받은 path 파라미터에 따라 데이터 선택
    let professorItem = null;
    professorList.item.forEach((item, index) => {
        if (item.profno === parseInt(urlParams.profno)) {
            professorItem = item;
            return;
        }
    });

    if (!professorItem) {
        return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
    }

    return (
        <div>
            <table border='1'>
                <tbody>
                    <tr>
                        <th>교수번호</th>
                        <td>{professorItem.profno}</td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>{professorItem.name}</td>
                    </tr>
                    <tr>
                        <th>직급</th>
                        <td>{professorItem.position}</td>
                    </tr>
                </tbody>
            </table>

            <MyWithRouter/>
        </div>
    );
};

export default ProfessorItem;
