import React from 'react';
import Form from '../components/Form';
import ImageList from '../components/ImageList';

const KakaoImageSearch = props => {
    return (
        <div>
            <h1>KaKao Open Api Tutorial</h1>
            
            <Form />
            <hr />

            {/* query라는 이름의 Path 파라미터를 전달함 */}
            <ImageList query={props.match.params.query} />

        </div>
    );
};

export default KakaoImageSearch;