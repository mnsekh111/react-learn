"use strict";

console.log("Script is loaded");

var user = {
    name: "Jesse Lingard",
    age: 25,
    location: "Manchester"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        " ",
        user.name,
        " "
    ),
    React.createElement(
        "p",
        null,
        " Age : ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        " Location : ",
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
