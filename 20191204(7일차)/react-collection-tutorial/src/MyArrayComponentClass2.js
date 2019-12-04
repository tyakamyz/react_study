import React from 'react';

class MyArrayComponentClass2 extends React.Component {
    constructor(props){
        super(props);
        this.seasons = ['봄','여름','가을','겨울'];
    }

    render() {
        return (
            <div>
                <h2>MyArrayComponentClass2</h2>
                <table border="1">
                    <tbody>
                        {this.seasons.map((item, index) => {
                            return <td key={index}>{item}</td>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyArrayComponentClass2;