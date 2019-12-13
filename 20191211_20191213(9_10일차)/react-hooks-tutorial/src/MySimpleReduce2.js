import React from 'react';

/**
 * Date 클래스의 객체를 yyyy-mm-dd 형식의 문자열로 반환하는 함수
 */
const getDateString = date => {
    if(date == undefined){
        date = new Date();
    }

    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    const str = yy + '-' + (mm < 10 ? '0' + mm : mm) + '-' +  (dd < 10 ? '0' + dd : dd);
    return str;
};

const myUseReducer = (state, action) => {
    const today = new Date();
    const targetDay = new Date();

    switch(action){
        case 'DAY7':
            targetDay.setDate(targetDay.getDate() - 7);
            break;
        case 'DAY15':
            targetDay.setDate(targetDay.getDate() - 15);
            break;
        case 'MONTH1':
            targetDay.setMonth(targetDay.getMonth() - 1);
            break;
        case 'MONTH3':
            targetDay.setMonth(targetDay.getMonth() - 3);
            break;
        case 'MONTH6':
            targetDay.setMonth(targetDay.getMonth() - 6);
            break;
    }

    return {startDate: getDateString(targetDay), endDate: getDateString(today)};
};

const MySimpleReduce2 = () => {
    const [myDate, setMyDate] = React.useReducer(myUseReducer, {
        startDate: getDateString(),
        endDate: getDateString()
    });

    return (
        <div>
            <h2>MySimpleReduce2</h2>
            <p>
                {myDate.startDate} ~ {myDate.endDate}
            </p>
            <p>
                <button type="button" onClick={e => setMyDate('DAY7')}>7일</button>
                <button type="button" onClick={e => setMyDate('DAY15')}>15일</button>
                <button type="button" onClick={e => setMyDate('MONTH1')}>1개월</button>
                <button type="button" onClick={e => setMyDate('MONTH3')}>3개월</button>
                <button type="button" onClick={e => setMyDate('MONTH6')}>6개월</button>
            </p>

            <hr />
        </div>
    );
};

export default MySimpleReduce2;