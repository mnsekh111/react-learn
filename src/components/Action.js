import React from 'react';

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.randomListener}> Get Random</button>
            </div>
        );
    }
}

export default Action;