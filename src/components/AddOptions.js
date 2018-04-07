import React from 'react';

class AddOptions extends React.Component {

    constructor(props){
        super(props);
        this.addListenerLocal = this.addListenerLocal.bind(this);
        this.state = {
            showError: false,
        };
    }

    addListenerLocal(event) {
        event.preventDefault();
        const showError = !!this.props.addListener(event.target.elements.newLike.value.trim());
        event.target.elements.newLike.value = "";
        this.setState( () => {
            return {
                showError
            };
        })

    }

    render() {
        return (
            <div>
                { this.state.showError && <div>Like length should be greater than 0 and not exist already</div> }
                <form onSubmit={this.addListenerLocal}>
                    <div className="container--two-item">
                        <input type="text" name="newLike"/>
                        <button type="submit"> {this.props.name}</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddOptions;