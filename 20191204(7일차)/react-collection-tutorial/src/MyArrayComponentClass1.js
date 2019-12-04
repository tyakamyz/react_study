import React from 'react';

class MyArrayComponentClass1 extends React.Component {
    constructor(props){
        super(props);
        this.myArray = ['hello','world'];
    }    

    render() {
        //반복 컴포넌트의 생성은 render 함수 안에서 처리한다
        const myArrayItem = this.myArray.map((item, index) => {
           return (
               <li key={index}>{item}</li>
           ); 
        });
        return (
            <div>
                <h2>MyArrayComponentClass1</h2>
                <ul>{myArrayItem}</ul>
                <hr />
            </div>
        );
    }
}

export default MyArrayComponentClass1;