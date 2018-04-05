class App extends React.Component {

    constructor(props) {
         super(props);
         this.state =  {
            name : "Jesse Lingaard",
            profession : "Footballer",
            age : 25,
            location : "Manchester",
            about : "I'm Man Utd's greatest number 10",
            likes : ["girls","films","football"]

         };
         this.clearLikes = this.clearLikes.bind(this);
         this.addLike = this.addLike.bind(this);
         this.getRandomLike = this.getRandomLike.bind(this);
    }

    clearLikes() {
        this.setState( ()=> {
            return {
                likes: []
            }
        })
    }

    addLike(like) {
        if(!like || like.length === 0) {
            return -1;
        }else if(this.state.likes.includes(like)){
            return -2;
        }

        this.setState((prevState) => {
            return {
                likes: prevState.likes.concat([like])
            }
        })
    }

    getRandomLike(){
        if(this.state.likes.length > 0) {
            alert("Random Like " + this.state.likes[Math.floor(Math.random() * this.state.likes.length)])
        }else{
            alert("No Likes.")
        }
    }

    render() {
        return (
            <div>
                <Header heading={this.state.name} subHeading={this.state.profession}/>
                <Action randomListener={this.getRandomLike}/>
                <Options clearListener={this.clearLikes} options={this.state.likes}/>
                <AddOptions addListener={this.addLike} name="Add likes"/>
            </div>
        );
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
        return (
            <div>
                <button onClick={this.props.randomListener}> Get Random</button>
            </div>
        );
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
                <button onClick={this.props.clearListener} disabled={this.props.options.length <= 0}>Remove all</button>
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

    constructor(props){
        super(props);
        this.addListenerLocal = this.addListenerLocal.bind(this);
        this.state = {
            showError: false
        };
    }

    addListenerLocal(event) {
        event.preventDefault();
        const showError = !!this.props.addListener(event.target.elements.newLike.value.trim());
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
                    <input type="text" name="newLike"/>
                    <button type="submit"> {this.props.name}</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('app'))