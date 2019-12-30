/**
 * 리덕스가 동작하는 과정에서 액션 함수 실행전 자동으로 호출될 기능
 * --> 여기서는 상태값을 브라우저 콘솔에 출력하는 역할.
 */

 const loggerMiddleware = store => next => action => {
    // 액션 타입으로 log를 그룹화함
    console.group(action && action.type);
    
    // 리덕스가 동작하기 전 상태값과 액션값을 기록한다.
    console.log('이전 상태', store.getState());
    console.log('액션', action);

    // 다음 미들웨어 혹은 리듀서에게 전달 --> 다음 정해진 동작 수행
    next(action);

    // 다음 동작을 수행하고 업데이트 된 상태값을 기록한다.
    console.log('다음 상태', store.getState());

    // 그룹 끝
    console.groupEnd();
 };

 export default loggerMiddleware;