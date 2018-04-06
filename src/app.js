import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    constructor(props) {
         super(props);
         this.state =  props;
         this.clearLikes = this.clearLikes.bind(this);
         this.clearLike = this.clearLike.bind(this);
         this.addLike = this.addLike.bind(this);
         this.getRandomLike = this.getRandomLike.bind(this);
    }

    componentDidMount() {
        try{
            let state = JSON.parse(localStorage.getItem(this.constructor.name));
            this.setState( () => (state));
            console.log("State is loaded");
        }catch( ex){
            console.log("No valid previous state");
        }
    }

    componentDidUpdate(prevProps, prevState) {
        try {
            if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
                localStorage.setItem(this.constructor.name, JSON.stringify(this.state));
                console.log("State is saved.")
            }
        }catch( ex){

        }

    }

    clearLikes() {
        this.setState( ()=> ({likes: []}));
    }

    clearLike(like) {
        this.setState( (prevState) => ({
            likes : prevState.likes.filter( (item) => item !== like)
        }));
    }

    addLike(like) {
        if(!like || like.length === 0) {
            return -1;
        }else if(this.state.likes.includes(like)){
            return -2;
        }

        this.setState((prevState) => ({
                likes: prevState.likes.concat([like])
        }));
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
                <Options clearOneListener= {this.clearLike} clearListener={this.clearLikes} options={this.state.likes}/>
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
    componentDidUpdate() {
        // console.log(this.constructor.name + " is updated");
    }

    render() {
        return (
            <div>
                <h3>The likes are : </h3>
                <ul>
                    {this.props.options.map( (option, index) => {
                        return <Option key={index} optionName={option} clearOneListener={this.props.clearOneListener}/>
                    })}
                </ul>
                <button onClick={this.props.clearListener} disabled={this.props.options.length <= 0}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {

    componentWillUnmount() {
        // console.log(this.constructor.name + " is unmounted");
    }

    render() {
        return (
            <div>
                <li>
                    {this.props.optionName}
                    <button onClick={() => {this.props.clearOneListener(this.props.optionName)}}> Delete this !</button>
                </li>
            </div>
        );
    }
}


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
                    <input type="text" name="newLike"/>
                    <button type="submit"> {this.props.name}</button>
                </form>
            </div>
        );
    }
}

const StatelessComp = (props) => {
    return (
        <div>
            This is a state less component : {props.name}
        </div>
    )
}

StatelessComp.defaultProps = {
    name : "State Default"
}

App.defaultProps = {
    name : "Jesse Lingaard",
    profession : "Footballer",
    age : 25,
    location : "Manchester",
    about : "I'm Man Utd's greatest number 10",
    likes : ["girls","films","footballs"]
}

ReactDOM.render( <App/>, document.getElementById('app'))