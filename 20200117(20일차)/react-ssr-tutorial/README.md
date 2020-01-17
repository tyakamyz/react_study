# React 프로젝트 생성 및 초기화 처리

## #01. 프로젝트 생성하기
```shell
yarn create react-app 프로젝트이름
```



## #02. 불필요한 파일 삭제

1. `/src` 폴더 안에서 App.css, index.css, logo.svg 삭제
1. index.js 파일에서 삭제한 파일 관련 구문 삭제

### App.js 파일 리셋

모든 내용을 삭제하고 rsc 명령으로 초기화

```js
import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <hr />
        </div>
    );
};

export default App;
```





## #03. 필수 패키지 설치
```shell
# CSS 관련
yarn add styled-components
# Ajax 관련
yarn add axios
```




## #04. Route 적용하기

### 1) 패키지 설치하기

```shell
yarn add react-router-dom
```

### 2) index.js

아래의 참조 구문 추가

```js
import { BrowserRouter } from 'react-router-dom';
```

렌더링 처리를 아래와 같이 수정

```js
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
```



## #05. 리덕스 관련

### 1) 필요한 패키지 설치

```shell
yarn add redux
yarn add react-redux
yarn add redux-actions
yarn add redux-logger
yarn add redux-devtools-extension
yarn add redux-thunk
```


### 2) 리덕스 스토어 구성하기

#### /src/modules/index.js

폴더와 파일을 직접 생성한다.

```js
import { combineReducers } from 'redux';

export default combineReducers({
    // 앞으로 추가될 모듈들이 이 위치에서 리덕스에 추가된다.    
});
```

#### /src/index.js

##### 리덕스를 위한 참조 추가

```js
// 리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from 'redux';

// 전체 App을 리덕스에 구독시키기 위해 위해 Provder라는 객체를 가져온다.
import { Provider } from 'react-redux';


// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import { composeWithDevTools } from 'redux-devtools-extension';

/** 미들웨어를 위한 참조 추가 */
// 미들웨어 불러오기
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

/** 리덕스 스토어에 등록시킬 모듈들 일괄 참조 */
// modules폴더(직접 생성해야 함)에 정의된 모든 action과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import rootReducer from './modules';
```

##### 리덕스 스토어 생성

```js
/** 리덕스 스토어 생성 */
// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

// --> 미들웨어와 크롬 개발자 도구 연동을 적용한 스토어 생성 (개발용 코드, 완성 후 기본코드로 전환 필요)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));
```

렌더링 처리를 `<Provider store={store}>` 태그로 감싼다.

```js
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
```

-----------------------------------

# 서버사이드 렌더링

## #01. 패키지 설치

```shell
yarn add webpack-node-externals
```


## #02. 숨겨져 있는 웹 팩 설정 꺼내기

git commit을 수행하기 전에는 eject가 실행되지 않음.

```shell
git add --all
git commit -m "웹팩 설정 전 초기화 처리"
yarn eject
```

> 명령의 실행 결과로 숨겨져 있던 웹팩 설정 파일들이 `/config` 폴더에 배치된다.


## #03. ssr 초기화 파일 작성

### /src/index.server.js

```js
/**
 * 서버사이드 렌더링용 초기화 파일
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Redering!!!</div>
);

console.log(html);
```


## #04. `/config/paths.js`에 작성한 초기화 파일에 대한 경로 명시

exports 되는 항목에 다음의 두 항목 추가

```js
ssrIndexJs: resolveApp('src/index.server.js'), // 서버사이드 렌더링 시작파일
ssrBuild: resolveApp('dist') // 웹팩 처리 후 저장 경로
```

## #05. 웹팩 설정 파일(`/config/webpack.config.server.js`) 생성

아래 내용 복사/붙여 넣기

```js
const nodeExternals = require('webpack-node-externals');
const paths = require('./paths');
const webpack = require('webpack');
const getClientEnvironment = require('./env');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const publicUrl = paths.servedPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'production', // 프로덕션 모드로 설정하여 최적화 옵션들을 활성화
  entry: paths.ssrIndexJs, // 엔트리 경로
  target: 'node', // node 환경에서 실행 될 것이라는 것을 명시
  output: {
    path: paths.ssrBuild, // 빌드 경로
    filename: 'server.js', // 파일이름
    chunkFilename: 'js/[name].chunk.js', // 청크 파일이름
    publicPath: paths.servedPath // 정적 파일이 제공 될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          // 자바스크립트를 위한 처리
          // 기존 webpack.config.js 를 참고하여 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              cacheDirectory: true,
              cacheCompression: false,
              compact: false
            }
          },

          // CSS 를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            //  exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 생성하지 않습니다.
            loader: require.resolve('css-loader'),
            options: {
              exportOnlyLocals: true
            }
          },
          // CSS Module 을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              exportOnlyLocals: true,
              getLocalIdent: getCSSModuleLocalIdent
            }
          },
          // Sass 를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  exportOnlyLocals: true
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // Sass + CSS Module 을 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: [
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                  exportOnlyLocals: true,
                  getLocalIdent: getCSSModuleLocalIdent
                }
              },
              require.resolve('sass-loader')
            ]
          },
          // url-loader 를 위한 설정
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하는데
              // emitFile 값이 false 일땐 경로만 준비하고 파일은 저장하지 않습니다.
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          // 위에서 설정된 확장자를 제외한 파일들은
          // file-loader 를 사용합니다.
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              emitFile: false, // 파일을 따로 저장하지 않는 옵션
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules']
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin(env.stringified) // 환경변수를 주입해줍니다.
  ]
};
```


## #06. 빌드 스크립트 파일(`/scripts/build.server.js`) 생성

아래 내용 복사/붙여넣기

```js
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', err => {
  throw err;
});

require('../config/env');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');

function build() {
  console.log('Creating server build...');
  fs.emptyDirSync(paths.ssrBuild);
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(stats.toString());
    });
  });
}

build();
```



## #07. 결과확인

### 1) 빌드하기

```shell
node scripts/build.server.js
```

> 명령이 잘 실행되고 나면 `/dist/server.js` 파일이 생성된다.

### 2) 실행하기

```shell
node dist/server.js
```

### 3) 단축 명령 등록

`/package.json` 파일의 "scripts" 부분에 다음의 두 줄 추가

```js
"scripts": {
    ...,
    "start-server": "node dist/server.js",
    "build-server": "node scripts/build.server.js"
}
```

이후 다음의 두 명령어로 서버 빌드 및 실행 가능함

```shell
yarn build-server
yarn start-server
```

## #08. Express 모듈을 통해 서버 페이지 작성하기

### 1) 패키지 추가

```shell
yarn add express
```

### 2) index.server.js

기본 코드를 아래의 코드로 대체

```js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';

const app = express();

// 서버사이드 렌더링을 처리 할 핸들러 함수입니다.
const serverRender = (req, res, next) => {
    // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버사이드 렌더링을 해줍니다.

    const context = {};

    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const root = ReactDOMServer.renderToString(jsx); // 렌더링을 합니다.
    res.send(root); // 결과물을 응답합니다.
};

const serve = express.static(path.resolve('./build'), {
    index: false // "/" 경로에서 index.html 을 보여주지 않도록 설정
});

app.use(serve); // 순서가 중요합니다. serverRender 전에 위치해야 합니다.
app.use(serverRender);

// 5000 포트로 서버를 가동합니다.
app.listen(5000, () => {
    console.log('Running on http://localhost:5000');
});
```