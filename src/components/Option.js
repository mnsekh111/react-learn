import React from 'react';
class Option extends React.Component {

    componentWillUnmount() {
        // console.log(this.constructor.name + " is unmounted");
    }

    render() {
        return (
            <div className="option">
                <li>
                    <div className="container--two-item">
                        <div>{this.props.optionName}</div>
                        <button onClick={() => {this.props.clearOneListener(this.props.optionName)}}> Delete this !</button>
                    </div>
                </li>
            </div>
        );
    }
}

export default Option;