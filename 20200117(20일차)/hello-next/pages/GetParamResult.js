import Layout from '../components/Layout';

const GetParamResult = (props) => {

    const {query} = props.url;

    return (
        <Layout>
            {query.ans == 300 ? (
                <h1 style={{color: 'green'}}>정답입니다.</h1>
            ) : (
                <h1 style={{color: 'red'}}>오답입니다.</h1>
            )}
        </Layout>
    );
};

export default GetParamResult;