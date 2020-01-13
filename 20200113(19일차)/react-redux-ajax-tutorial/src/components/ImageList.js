import React from 'react';
import styled from 'style-components';
// 리덕스에서 제공하는 확장 hook 함수 --> redux를 사용할 수 있게 한다.
import { useSelector, useDispatch } from 'react-redux';

// 이미지 항목 하나를 표시하기 위한 컴포넌트
import ImageItem from './ImageItem';

/** 전체 검색결과를 구성할 박스 */
const ImageListBox = styled.div`
    &:after {
        content: '';
        display: block;
        float: none;
        clear: both;
    }
`;

const ImageList = props => {

    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    // --> dispatch(thunk함수()) ==> 리덕수를 구동
    const dispatch = useDispatch();

    /** Hook 기능을 통해 리덕스 스토어의 상태값 가져오기 */
    // --> useSelector()함수에 전달하는 콜백함수가 호출되면서 state 파라미터로 상태값들이 전달된다.
    //     이 상태값들 중 사용하고자 하는 값들만 별도의 JSON으로 묶어 리턴받아 사용한다.
    const { searchResult, loading, error } = useSelector((state) => state.KakaoImageSearch);

    console.group("ImageList");
        console.group("props");
            console.log(props);
        console.groupEnd();
        console.group("state");
            console.log(searchResult);
            console.log(loading);
            console.log(error);
        console.groupEnd();
    console.groupEnd();

    return (
        <div>
        
        </div>
    );
};

export default ImageList;