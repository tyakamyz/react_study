import React from 'react';

class MyArrayComponentClass3 extends React.Component {
    constructor(props){
        super(props);
        this.avengers = ['아이언맨','캡아','토르','헐크'];
    }

    render() {
        return (
            <div>
                <h2>MyArrayComponentClass3</h2>
                <ul>
                    {/** 다른 컴포넌트를 참조. props로 배열 자체를 전달함 */}
                    <MyAvengersItemClass data_name={this.avengers} />
                </ul>
                <hr />
            </div>
        );
    }
}

class MyAvengersItemClass extends React.Component{
    render(){
        return(
            this.props.data_name.map((item, index) => {
                return (<li key={index}>{item}</li>)
            })
        )
    }
}

export default MyArrayComponentClass3;