"use strict";

console.log("Script is loaded");

var user = {
    name: "Jesse Lingaard",
    age: 25,
    location: "Manchester",
    about: "I'm Man Utd's greatest number 10",
    likes: ["girls", "booz"]
};

function getAbout(about) {
    if (about.length > 0) {
        return React.createElement(
            "p",
            null,
            about
        );
    }
}

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        user.likes.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var clearAll = function clearAll() {
    user.likes.splice(0, user.likes.length);
    renderApp();
};

function renderApp() {
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
        ),
        getAbout(user.about),
        React.createElement(
            "p",
            null,
            "Number of Likes : ",
            user.likes.length
        ),
        React.createElement(
            "h2",
            null,
            " The likes are :"
        ),
        React.createElement(
            "ol",
            null,
            user.likes.map(function (like, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    like
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                " Add option"
            )
        ),
        React.createElement(
            "button",
            { onClick: clearAll },
            "Clear"
        )
    );
    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}

renderApp();
