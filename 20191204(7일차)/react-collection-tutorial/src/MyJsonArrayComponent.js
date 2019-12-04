import React from 'react';

const MyJsonArrayComponent = () => {

    const avengers = {
        character : [
            {name: '아이언맨', actor: '로버트 다우니 주니어'},
            {name: '캡틴 아메리카', actor: '크리스 에반스'},
            {name: '토르', actor: '크리스 햄스워드'},
            {name: '헐크', actor: '마크 버팔로'},
            {name: '블랙 위도우', actor: '스칼렛 요한슨'}
        ]
    };

    const avengersItem = avengers.character.map((item, index) => {
        return (
            <li key={index}>
                <a href={'https://namu.wiki/w/' + item.name} target='_blank'
                rel='noopener noreferrer'>      {/** react에서 추가된 속성 보안때문에 rel 옵션을 넣어줘야함 */}
                    {item.name}
                </a>
                <span style={{fontSize: '0.8em', color: '#999', paddingleft: '10px', fontStyle: 'italic'}}>({item.actor})</span>
            </li>
        );
    });

    return (
        <div>
            <h2>MyJsonArrayComponent</h2>
            <ul>{avengersItem}</ul>
            <hr />
        </div>
    );
};

export default MyJsonArrayComponent;