# 리덕스

리액트 전역 상태 관리 라이브러리.

일반적인 컴포넌트 개발시에는 상태값(변수)을 관리하기 위해 라이프사이클이나 hooks을 사용한다.

이 경우 각각의 컴포넌트가 관리하는 변수값들이 소스파일 여기저기에 흩어져 있기 때문에 코드 유지보수에 좋지 않다.

컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 더욱 효율적으로 관리할 수 있다.

즉, 여러 개의 컴포넌트가 개별적으로 관리하는 상태값들을 하나의 소스에 모아 놓고 통합 관리하는 것이 목적.

컴포넌트끼리 상태를 공유해야 할 때도 여러 컴포넌트를 거치지 않고 손쉽게 상태 값을 전달하거나 업데이트 할 수 있다.

## 리덕스 기본 요소
1. 액션
2. 액션 생성 함수
3. 상태값
4. 리듀서
5. 스토어
6. 구독
7. 디스패치

!!ReduxSample.html 참고

## React에서 리덕스를 활용하는 일반적인 패턴

프레젠테이션 계층과 컨테이너 계층을 분리하는 형태.

### 프레젠테이션 계층
 - proprs를 받아와서 화면에 UI를 보여주기만 하는 역활
 - 일반적인 컴포넌트
### 컨테이너 계층
 - 리덕스와 연동되는 화면을 갖지 않는 컴포넌트
 - 상태를 받아오거나 스토어에 액션을 디스패치 한다.
 - 액션을 디스패치하면 상태값이 변경되는 함수가 실행된다.
 - 상태값은 프레젠테이션 계층 컴포넌트의 props로 사용된다.


                    ---- 액션 디스패치 --->
    [ 컨테이너 컴포넌트 ]                  [ 리덕스 스토어 ]
            ↓       <---- 스토어 상태  ----
          Props
            ↓
    [ 프레젠테이션 컴포넌트 ]

## 리액트 프로젝트에 리덕스 적용 순서

### 웹 브라우저 개발 도구 설치 (모니터링 가능함)
Redux DevTools를 Chrome브라우저에 설치

### 추가 컴포넌트 설치

생성된 프로젝트 안에서 명령 프롬포트 (혹은 PowerShell)을 열고 아래 명령을 통해 컴포넌트 추가

```shell
npm install --save redux
npm install --save react-redux
npm install --save redux-action
npm install --save redux-devtools-extension

### 코드 작성 순서

> 존재하지 않는 폴더는 새로 생성하세요.

* index.js : 최초 1회만 작업
* modules/index.js : 기본 틀 작업 후, 모듈이 추가될 때 마다 갱신


## 리덕스 미들웨어

액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서  실행되는 사전에 지정된 작업들.

미들웨어는 index.js에서 스토어를 생성하는 과정에서 적용한다.

### 미들웨어로 수행하는 처리들

 - 전달받은 액션을 단순히 콘솔에 기록
 - 전달받은 액션 정보를 기반으로 액션을 아예 취소
 - 다른 종류의 액션을 추가로 디스패치


### 동작 순서
  [액션] --> [미들웨어] --> [리듀서] -->[스토어]


### 미들웨어로 동작하는 함수의 기본 구조
(꼭 해야하는 작업 ex. 로그 기록, 로그인 검사 등 에 쓰임)

```js
const loggerMiddleware = function loggerMiddleware(store){
  return function(next){
    return function(action){
      // 미들웨어 기본구조
    };
  };
};
export default loggerMiddleware
`

 - 아래와 같이 축약 가능
```js
const loggerMiddleware = store => next => action => {
      // 미들웨어 기본구조
    };
export default loggerMiddleware
`

- store : 리덕스 스토어 인스턴스
- action : 디스패치된 액션
- next : 다음 작업으로 넘어가기 위한 함수.
         next(action)을 호출하면 다음 미들웨어로 액션을 넘겨준다.
         그 다음 미들웨어가 없다면 리듀서에게 액션을 넘겨준다.

미들웨어 내부에서 store.dispatch를 사용하면 첫 번째 미들웨어부터 다시 처리한다.

만약 미들웨어에서 next(action)을 사용하지 않으면 액션이 리듀서에 전달되지 않는다.


### 일반적으로 많이 사용하는 오픈소스 미들웨어

 - redux-logger : 브라우저 콘솔에 로그를 기록하는 기능
 - redux-thunk : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)
 - redux-sage : 비동기 작업을 위한 미들웨어 (주로 Timer, Ajax 등)

 > redux-thunk와 redux-saga는 서로 경쟁 상태