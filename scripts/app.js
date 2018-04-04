console.log("Script is loaded");


var user = {
    name : "Jesse Lingard",
    age : 25,
    location : "Manchester"
};

var template = (
    <div>
        <h1> {user.name} </h1>
        <p> Age : {user.age}</p>
        <p> Location : {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template , appRoot );