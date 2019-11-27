import React, { Component } from 'react';

class MyUnstructed1 extends Component {

    static defaultProps = {
        "color" : "#000",
        "children" : "내용이 없습니다"
    };

    render() {
        const {color, children} = this.props;

        return (
            <div>
                <font color={this.props.color}>{this.props.children}</font>
            </div>
        );
    }
}

export default MyUnstructed1;