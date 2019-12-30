import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ProfessorItem from './ProfessorItem.js';

const Professor = () => {
    const activeStyle = {
        background: '#f60',
        color: '#fff',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h2>Professor</h2>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} active="true" to='/professor/9901'>김도훈</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to='/professor/9902'>이재우</NavLink>
                </li>
            </ul>

            {/* path파라미터 없이 기본 주소에 반응하는 라우터 */}
            <Route path='/professor' exact render={() => <div>교수님을 선택해 주세요</div>} />

            {/* path파라미터에 반응하는 라우터 */}
            <Route path='/professor/:profno' component={ProfessorItem} />
        </div>
    );
};

export default Professor;
