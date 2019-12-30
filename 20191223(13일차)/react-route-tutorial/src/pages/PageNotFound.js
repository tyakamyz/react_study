import React from 'react';

const PageNotFound = (props) => {
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <h3>"{props.location.pathname}" 페이지는 존재하지 않습니다.</h3>
        </div>
    );
};

export default PageNotFound;