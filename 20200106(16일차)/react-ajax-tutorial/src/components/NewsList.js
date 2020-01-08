import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

/** Ajax 적용전 사용할 임시 데이터 */
// const testData = [
//     {
//         urlToImage: 'https://via.placeholder.com/150',
//         url: 'https://www.naver.com',
//         subject: 'helloworld',
//         description: 'hello world react ajax tutorial'
//     },
//     {
//         urlToImage: 'https://via.placeholder.com/150',
//         url: 'https://www.naver.com',
//         subject: 'helloworld',
//         description: 'hello world react ajax tutorial'
//     },
//     {
//         urlToImage: 'https://via.placeholder.com/150',
//         url: 'https://www.naver.com',
//         subject: 'helloworld',
//         description: 'hello world react ajax tutorial'
//     }
// ];

/** 전체 기사 목록을 구성할 박스 */
const NewsListBox = styled.div`
    padding-bottom: 10px;
    margin-bottom: 10px;
    width: auto;
`;

/**
 * 뉴스기사 목록의 전체 박스를 구성하는 컴포넌트
 */
const NewsList = (props) => {
    // newsData라는 상태값을 생성 --> 초기값은 원소의 수가 0개인 배열
    // setNewsData -> 값을 변경하기위해 사용하는 함수 (setter)
    const [newsData, setNewsData] = React.useState([]);

    // 비동기 작업 수행을 위해 async를 명시
    React.useEffect(() => {
        async function getNewsList() {
            // OpenAPI 주소 정의
            let apiUrl = "https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f";

            if (props.category !== undefined) {
                apiUrl += "&category=" + props.category;
            }

            // Ajax연동
            const result = await axios.get(apiUrl);

            // 받아온 결과값을 상태값에 업데이트
            setNewsData(result.data.articles);

            console.group('NewsList Effect');
            console.debug("category=%s", props.category);
            console.debug("url=%s", apiUrl);
            console.debug(result);
            console.groupEnd();
        }
        getNewsList();
    }, [props.category]);

    return (
        <NewsListBox>
            {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
            {newsData.map((item, index) => (
                <NewsItem key={index} article={item} />
            ))}
        </NewsListBox>
    );
};

export default NewsList;
