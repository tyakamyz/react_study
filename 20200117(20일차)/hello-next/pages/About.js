import Layout from '../components/Layout';

const about = props => {
    return (
        <Layout>
            <h1>저로 말씀드릴것 같으면 {props.from}에서 실행되었습니다.</h1>
            <h2>{props.a}</h2>
            <h2>{props.b}</h2>
        </Layout>
    );
};

// 모든 pages폴더 내의 함수들은 getInitialProps 라는 하위 함수를 갖는다.
// 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다.
// ex) 브라우저의 요청을 받기 위한 request 객체 등...
about.getInitialProps = async (props) => {
    console.log(props);

    let from = "client";

    if (props.req) {
        from = "server";
    }

    return { a: 123, b: 234, from: from };
};

export default about;
