import React from 'react';
import {axios} from 'axios';

const ImageList = props => {

    // searchResult 상태값을 생성 --> 초기값은 원소의 수가 0개인 배열
    const [searchResult, setSearchResult] = React.useState([]);

    // Ajax 연동 전, 후를 판단하기 위한 boolean값
    const [loading, setLoding] = React.useState(false);

    // props.query 값이 변경될 때만 실행되는 hook 정의
    React.useEffect(() => {
        console.group("ImageList");
        console.debug("검색어: %s", props.query);
        console.groupEnd();

        // async -> 이 함수 안에서 동작하는 비동기 처리가 종료될 때 까지 실행흐름을 대기시킴
        async function getSearchList(){
            setLoding(true);

            // Ajax 연동 시작
            try{
                const result = await axios.get('https://dapi.kakao.com/v2/search/image',{
                    // 카카오에서 요구하는 검색에 필요한 GET 파라미터
                    params: { query: props.query},
                    // 인증에 필요한 HTTP Header 정보 설정
                    headers: { Authorization: "KakaoAK 8cac4461d0c1dd0fac400af775ba6fc8"}
                });

                // 정상 데이터 처리를 확인
                console.log(result.data);

                // 카카오가 전달해 주는 검색 결과를 상태값에 갱신
                setSearchResult(result.data.documents);
            }catch(e){
                // kakao에서 보내주는 에러메시지 전문받기
                // --> {"errorType": "AccessDeniedError", "message":"cannot find appkey"}
                const responseBody = e.response.data;

                // HTTP 에러코드를 메시지 변수에 추가
                let msg = "[" + e.response.this.status + "] ";

                // 카카오에서 보내주는 에러 메시지 내용을 메시지 변수에 추가
                msg += responseBody.errorType + "\n" + responseBody.message;
                alert(msg);
            }

            // Ajax 통신 종료를 알림
            setLoding(false);
        }
        getSearchList();
    }, [props.query]);

    if(loading){
        return <h2>검색 중 입니다...</h2>
    }

    if(!searchResult || searchResult.length < 1){
        return <h2>검색결과가 없습니다.</h2>
    }

    return (
        <ImageListBox>
            
        </ImageListBox>
    );
};

export default ImageList;