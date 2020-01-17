import React from 'react';
import styled from 'styled-components';
// 리덕스에서 제공하는 확장 hook 함수 --> redux를 사용할 수 있게 한다.
import { useSelector, useDispatch } from 'react-redux';
// 모듈에 정의해 놓은 thunk 함수 --> 이 함수를 dispatch 함으로 리덕스가 구동된다.
import { searchImage } from '../modules/KakaoImageSearch';
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

const ImageList = (props) => {
    
    /** action함수를 dispatch 시키기 위한 기능 가져오기 */
    // --> dispatch(thunk함수()) ==> 리덕스를 구동
    const dispatch = useDispatch();

    /** Hook 기능을 통해 리덕스 스토어의 상태값 가져오기 */
    // -> useSelector()함수에 전달하는 콜백함수가 호출되면서 state 파라미터로 상태값들이 전달된다.
    //    이 상태값들 중 사용하고자 하는 값들만 별도의 JSON으로 묶어 리턴받아 사용한다.
    const {searchResult, loading, error} = useSelector((state) => state.KakaoImageSearch);

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

    /** props.query 값이 변경될 때만 실행되는 hook 정의 */
    // 여기서 모듈에 정의해 놓은 thunk 함수를 dispatch하면 redux의 액션 함수가 실행되면서 상태값을 갱신하게 된다.
    React.useEffect(() => {
        dispatch(searchImage(props.query));
    }, [props.query]);

    if (loading) { return <h2>검색중입니다...</h2>; }

    if (error) { return <h2 style={{color: '#f00'}}>{error}</h2>; }

    if (!searchResult || searchResult.length < 1) { return <h2>검색결과가 없습니다.</h2>; }

    return (
        <ImageListBox>
            {/* 검색결과 데이터 수 만큼 목록의 아이템을 표시함 */}
            {searchResult.map((item, index) => (
                <ImageItem key={index} document={item} />
            ))}
        </ImageListBox>
    );
};

export default ImageList;