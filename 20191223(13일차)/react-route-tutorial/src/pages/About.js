import React from 'react';

const About = props => {
    console.log(props);
    return (
        <div>
            <h1>About</h1>
            <p>소개 페이지 입니다.</p>
            <p>{props.location.pathname}</p>
        </div>
    );
};

export default About;
