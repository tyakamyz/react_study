import React from 'react';
import './assets/scss/style.scss';

const MyScss = () => {
    return (
        <div>
            <h2>MyScss</h2>

            <div className="my-scss">
                <div className="my-scss-box red" />
                <div className="my-scss-box green" />
                <div className="my-scss-box blue" />
                <div className="my-scss-box orange" />
                <div className="my-scss-box yellow" />
                <div className="my-scss-box pink" />
            </div>

            <hr />
        </div>
    );
};

export default MyScss;