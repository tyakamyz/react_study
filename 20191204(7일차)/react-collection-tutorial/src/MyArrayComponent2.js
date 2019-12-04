import React from 'react';

const MyArrayComponent2 = props => {

    const seasons = ['봄','여름','가을','겨울'];

    return (
        <div>
            <h2>MyArrayComponent2</h2>
            <table border="1">
                <tbody>
                    <tr>
                        {seasons.map((item, index) => {
                            return <td key={index}>{item}</td>
                        })}
                    </tr>
                </tbody>
            </table>
            <hr />
        </div>
    );
};
export default MyArrayComponent2