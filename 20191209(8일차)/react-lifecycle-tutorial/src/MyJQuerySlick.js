import React from 'react';

/**
 * React에서 jQuery Slick 플러그인 사용하기
 * 단순히 예시 입니다. 실제로 이 플러그인을 사용하고자 하는 경우 React-Slick을 사용하시길 권장합니다.
 * 
 * https://github.com/akiran/react-slick
 */

// index.html 에서 참조하고 있는 jQuery를 React 안으로 가져옴.
const $ = window.$;

class MyJQuerySlick extends React.Component {
    /** 컴포넌트가 표시하는 HTML에 jQuery 플러그인 적용 */
    componentDidMount() {
        // 탐색 결과를 jQuery 객체로 생성하여 jQuery 기능을 사용한다.
        this.$el = $(this.refs.slick);

        // jQuery Plugin에 의해서 jQuery 객체에 추가되는 함수.
        this.$el.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }

    render() {
        return (
            <div>
                <h2>MyJQuerySlick</h2>
                <p>박스를 드래그 하세요.</p>
                <div ref='slick'>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </div>

                <hr />
            </div>
        );
    }
}

export default MyJQuerySlick;
