console.log("Script is loaded");


const user = {
    name : "Jesse Lingaard",
    age : 25,
    location : "Manchester",
    about : "I'm Man Utd's greatest number 10",
    likes : ["girls","films","football"]
};

function getAbout(about){
    if(about.length > 0){
        return <p>{about}</p>;
    }
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        user.likes.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const clearAll = () => {
    user.likes.splice(0,user.likes.length)
    renderApp();
}

function renderApp() {
    const template = (
        <div>
            <h1> {user.name} </h1>
            <p> Age : {user.age}</p>
            <p> Location : {user.location}</p>
            {getAbout(user.about)}
            <p>Number of Likes : {user.likes.length}</p>
            <h2> The likes are :</h2>
            <ol>
                {
                    user.likes.map( (like,index) => {
                        return <li key={index}>{like}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add option</button>
            </form>
            <button onClick={clearAll}>Clear</button>
        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template , appRoot );
}

renderApp();
