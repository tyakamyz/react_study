import React from 'react';
import styled, {css} from 'styled-components';
/**
 * 1) 컴포넌트 설치
 * npm install --save styled-components
 * 
 * 2) VSCode Extension 설치
 * vscode-styled-components
 */

// ul 태그로 구성된 컴포넌트 정의 --> styled.태그이름``; (역따옴표 주의!)
const MyGridContainer = styled.ul`
    /** CSS코딩 진행 */
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1024px;
    border: 5px solid #cc0;
    padding: 10px;

    &:after { content: ''; display: block; clear: both; float: none; }
`;

// li 태그로 구성된 컴포넌트
const MyGridItem = styled.li`
    float: left;
    width: 33%;
`;

// div 태그로 구성된 컴포넌트
const MyBox = styled.div`
    border: 3px solid #000;
    background-color: #eee;
    height: 100px;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    cursor: pointer;
    transition: all 0.1s ease-in;

    /* 색상값이 전달된 경우 해당값 사용, 그렇지 않은 경우 "black"을 기본값으로 사용 */
    color: ${props => props.color || 'black'};

    &:hover{
        transform: scale(1.05, 1.05) rotate(-10deg);
        background-color: ${props => props.color || 'black'};
        color: #fff;
    }

    /* props 값에 대한 조건절 처리 */
    ${props => 
        props.number % 2 == 1 && css`
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
        `
    }

`;

const MyStyledComponenet1 = () => {
    // 색상이름이나 색상 코드에 대한 배열
    const myColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'pink'];

    // 배열전체를 100으로 봤을 때 하나당 몇%인지 계산
    const myWidth = (100 / myColors.length) + "%";

    return (
        <div>
            <h2>MyStyledComponenet1</h2>

            {/* <MyGridContainer>
                <MyGridItem><MyBox>Hello World</MyBox></MyGridItem>
                <MyGridItem><MyBox>Hello World</MyBox></MyGridItem>
                <MyGridItem><MyBox>Hello World</MyBox></MyGridItem>
            </MyGridContainer> */}

            {/* 배열 원소를 활용한 컴포넌트 사용 */}
            <MyGridContainer>
                {myColors.map((item, index) => {
                    return(
                        // MyGridItem에게 width라는 이름의 props를 전달함.
                        <MyGridItem key={index} width={myWidth}>
                            <MyBox color={item} number={index}>
                                {item}
                            </MyBox>
                        </MyGridItem>
                    );
                })}
            </MyGridContainer>

            <hr />
        </div>
    );
};

export default MyStyledComponenet1;