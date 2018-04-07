import Option from './Option'
import React from 'react';

class Options extends React.Component {
    componentDidUpdate() {
        // console.log(this.constructor.name + " is updated");
    }

    render() {
        return (
            <div className="options">
                <div className="container--two-item container__light">
                    <h3>The likes are : </h3>
                    <button onClick={this.props.clearListener} disabled={this.props.options.length <= 0}>Remove all</button>
                </div>
                <ul>
                    {this.props.options.map( (option, index) => {
                        return <Option key={index} optionName={option} clearOneListener={this.props.clearOneListener}/>
                    })}
                </ul>

            </div>
        )
    }
}

export default Options;