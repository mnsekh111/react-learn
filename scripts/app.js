class App extends React.Component {

    constructor(props) {
         super();
         this. user = {
             name : "Jesse Lingaard",
             profession : "Footballer",
             age : 25,
             location : "Manchester",
             about : "I'm Man Utd's greatest number 10",
             likes : ["girls","films","football"]
        };
    }

    render() {
        return (
            <div>
                <Header heading={this.user.name} subHeading={this.user.profession}/>
                <Action />
                <Options options={this.user.likes}/>
                <AddOptions name="Add likes"/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.heading}</h1>
                <h2>{this.props.subHeading}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return <div>Action</div>
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>The likes are : </h3>
                <ul>
                    {this.props.options.map( (option, index) => {
                        return <Option key={index} optionName={option}/>
                    })}
                </ul>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return <li>{this.props.optionName}</li>
    }
}


class AddOptions extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>{this.props.name}</button>
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('app'))