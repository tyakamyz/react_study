import React from 'react';

const createTable = (rows, cols) => {
    // <tr>....</tr> 단위를 저장할 배열
    let tr = [];

    // 주어진 행의 수 만큼 반복
    for(let i=0; i<rows; i++){
        // <td>...</td> 단위를 저장할 배열
        let td = [];

        for(let j=0; j<cols; j++){
            // <td> 단위 배열에 태그를 push(추가)한다.
            td.push(<td>[{i},{j}]</td>);
        }

        // <tr> 태그 단위에 준비된 <td> 단위를 push 한다.
        tr.push(<tr>{td}</tr>)
    }

    return tr;
}

const MyLoop1 = () => {
    return (
        <div>
            <table>
                <tbody>
                    {createTable(5, 3)}
                </tbody>
            </table>
        </div>
    );
};

export default MyLoop1;