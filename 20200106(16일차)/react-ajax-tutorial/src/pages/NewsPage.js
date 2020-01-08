import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

/**
 * 뉴스 목록 페이지.
 * -> Router에 의해서 호출되는 대상이므로 GET,Path 파라미터는 이 페이지에서 수신가능
 * @param {*} props 
 */
const NewsPage = props => {
    // 전체 Path 파라미터 받아오기
    const pathParams = props.match.params;

    // Path파라미터에서 category변수만 추출
    const category = pathParams.category;

    // 로그로 확인
    console.group("NewsPage");
    console.debug(pathParams);
    console.debug("category=%s", category);
    console.groupEnd();

    return (
        <div>
            <h1>Simple Ajax Tutorial</h1>
            <Categories />
            <hr />
            <NewsList category={category} />
        </div>
    );
};

export default NewsPage;
