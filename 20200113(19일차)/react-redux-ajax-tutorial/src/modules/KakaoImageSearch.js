import { handleAction, createAction } from 'redux-actions';
import axios from 'axios';

/** 액션 */
// 어떤 컴포넌트가 겪는 상황을 구분하기 위한 문자열 변수들
// "파일이름/상황이름" 값을 지정하면 다른 모듈과 Action값이 충돌하는 것을 방지할 수 있다.
// Ajax 연동 기능 하나당 3개의 액션 정의 --> 연동중, 연동성공, 연동실패
const SEARCH = 'kakaoImageSearch/SEARCH';
const SEARCH_SUCCESS = 'kakaoImageSearch/SEARCH_SUCCESS';
const SEARCH_FAILURE = 'kakaoImageSearch/SEARCH_FAILURE';

/** 액션 생성 함수 */
// 컴포넌트에 대한 액션 값의 수 만큼 정의 --> createAction() 함수를 통해 함수 정의를 자동화
export const searchAction   = createAction(SEARCH);
export const searchSuccessAction   = createAction(SEARCH_SUCCESS);
export const searchFailureAction   = createAction(SEARCH_FAILURE);

/** 상태값 */
// 컴포넌트에서 다루고자 하는 데이터. 일반 변수나 JSON 객체 모두 자유롭게 설정 가능
const initialState = {
    searchResult: [],   // 검색 결과
    loading: false,     // 현재 검색중인지 여부
    error: false        // 에러 발생 여부
};

/** 상태값에 따라 동작할 액션 함수 정의 */
// 특별한 처리로직을 갖는것이 아니고, 각 상황에 따라 상태값만 조작하여 리턴한다.
export default handleActions({
        [SEARCH]: (state = initialState, action) => {
            return { ...state, loading: true};
        },
        [SEARCH_SUCCESS]: (state = initialState, action) => {
            return { ...state, searchResult: action.payload.result, loading: false};
        },
        [SEARCH_FAILURE]: (state = initialState, action) => {
            return { ...state, loading: false, error: action.payload.error};
        }
    }, initialState
);

/** 비동기 작업을 수행할 함수 정의 */
// 컴포넌트로부터 query(검색어)라는 파라미터를 전달받는다. (파라미터는 개발자가 상황에 따라 정의함)
// 이 안에서 action함수들을 dispatch(호출)한다.
// 이렇게 정의된 함수들은 컴포넌트의 props에 포함된다.
export const searchImage = query => async dispatch => {
    // 검색어가 없을 경우
    if(!query){
        // 검색 종료를 의미하는 action함수 호출 --> 결과값은 빈 배열
        dispatch(searchSuccessAction({ result: [] }));
        return;
    }

    // 검색을 시작했음을 알림
    dispatch(searchAction());

    try{
        const result = await axios.get('https://dapi.kakao.com/v2/search/image', {
            // 카카오에서 요구하는 검색에 필요한 GET 파라미터
            params: { query: query },
            // 인증에 필요한 HTTP Header 정보 설정
            headers: { Authorization: 'KakaoAK 8cac4461d0c1dd0fac400af775ba6fc8' }
        })
    }catch(e){
        // 카카오에서 보내주는 에러메시지 전문 받기
        // --> {"errorType": "AccessDeniedError", "message": "cannot find appkey"}
        const responseBody = e.response.data;

        // HTTP 에러코드를 메시지 변수에 추가
        let msg = '[' + e.response.status + '] ';

        // 카카오에서 보내주는 에러 메시지 내용을 메시지 변수에 추가
        msg += responseBody.errorType + '\n' + responseBody.message;

        // 검색에 에러가 발생했음을 알림
        dispatch(searchFailureAction({ error: msg }));
    }
};