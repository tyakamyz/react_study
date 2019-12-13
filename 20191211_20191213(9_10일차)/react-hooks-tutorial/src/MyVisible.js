import React from 'react';

const MyVisible = () => {

    React.useEffect(() => {
        console.log("[MyVisible] 화면에 컴포넌트가 로드될 때 처리되어야 할 백엔드 연동 기능");
    }, []);

    React.useEffect(() => {
        console.log("[MyVisible] 실시간으로 처리되어야 하는 백엔드 연동 기능");
    });

    React.useEffect(() => {
        return () =>{
            console.log("[MyVisible] 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 백엔드 연동 기능");
        };
    });

    return (
        <div>
            {/** 임시로 이미지를 만드는 url */}
            <img alt="Hello React" src="http://placehold.it/320x100?text=HelloReact" />
        </div>
    );
};

export default MyVisible;