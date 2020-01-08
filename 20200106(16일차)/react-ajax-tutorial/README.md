# 프로젝트 생성 및 초기화

```shell
yarn create react-app react-ajax-tutorial
```

# 초기화 작업

1. 프로젝트 폴더 안에서 route 설치
    ```shell
    yarn add react-router-dom
    yarn add styled-components
    yarn add axios
    ```
2. `/src` 폴더 안에서 App.css, index.css, logo.svg 삭제
3. App.js 파일과 index.js 파일에서 삭제한 파일 관련 구문 삭제
4. index.js 파일에서 다음의 구문 추가
    ```js
    import { BrowserRouter } from 'react-router-dom';
    ```
5. index.js 파일에서 `<App />`을 `<BrowserRouter><App /></BrowserRouter>`로 변경
6. App.js 파일에 다음을 추가
   ```js
   import { Route, Link, Switch } from "react-router-dom";
   ```


# 초기화 작업

> https://newsapi.org/

사이트 접속 후 메인의 "Get API Key" 버튼 클릭 후 가입양식 작성 후 APIKEY를 발급받는다.

> https://newsapi.org/v2/top-headlines?country=kr&apiKey=발급받은키

크롬 웹 스토어에서 "JSONView"로 검색 후 확장프로그램을 설치