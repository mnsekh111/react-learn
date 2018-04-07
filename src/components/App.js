import _ from 'lodash'
import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOptions from './AddOptions'
import OptionModal from './OptionModal'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
        this.clearLikes = this.clearLikes.bind(this);
        this.clearLike = this.clearLike.bind(this);
        this.addLike = this.addLike.bind(this);
        this.getRandomLike = this.getRandomLike.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
            if (!_.isEqual(prevState.likes.sort(), this.state.likes.sort())) {
                localStorage.setItem(this.constructor.name, JSON.stringify(this.state));
                console.log("State is saved.")
            }
        }catch( ex){

        }

    }

    closeModal () {
        this.setState( ()=> {
            return {
                modalState:{
                    isModalOpen: false,
                    lastRandom: undefined
                }
            }
        })
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
            let lastRandom = this.state.likes[Math.floor(Math.random() * this.state.likes.length)];
            this.setState( ()=> {
                return {
                    modalState : {
                        isModalOpen : true,
                        lastRandom
                    }
                }
            })
        }else{
            alert("No Likes.")
        }
    }

    render() {
        return (
            <div>
                <Header heading={this.state.name} subHeading={this.state.profession}/>
                <div className="container">
                    <Action randomListener={this.getRandomLike}/>
                    <Options clearOneListener= {this.clearLike} clearListener={this.clearLikes} options={this.state.likes}/>
                    <AddOptions addListener={this.addLike} name="Add likes"/>
                    <OptionModal isModalOpen = {this.state.modalState.isModalOpen} content={this.state.modalState.lastRandom} closeListener={this.closeModal}/>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    name : "Jesse Lingaard",
    profession : "Footballer",
    age : 25,
    location : "Manchester",
    about : "I'm Man Utd's greatest number 10",
    likes : ["girls","films","football"],
    modalState: {
        isModalOpen: false,
        lastRandom : undefined
    }
}

export default App;