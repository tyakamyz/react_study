import Layout from '../components/Layout';
import Link from 'next/link';

const GetParam = () => {
    return (
        <Layout>
            <h1>100 + 200 = ?</h1>
            <ul>
                <li><Link href="/GetParamResult?ans=100"><a>100</a></Link></li>
                <li><Link href="/GetParamResult?ans=200"><a>200</a></Link></li>
                <li><Link href="/GetParamResult?ans=300"><a>300</a></Link></li>
                <li><Link href="/GetParamResult?ans=400"><a>400</a></Link></li>
            </ul>
        </Layout>
    );
};

export default GetParam;