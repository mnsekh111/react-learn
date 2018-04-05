"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            name: "Jesse Lingaard",
            profession: "Footballer",
            age: 25,
            location: "Manchester",
            about: "I'm Man Utd's greatest number 10",
            likes: ["girls", "films", "football"]

        };
        _this.clearLikes = _this.clearLikes.bind(_this);
        _this.addLike = _this.addLike.bind(_this);
        _this.getRandomLike = _this.getRandomLike.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "clearLikes",
        value: function clearLikes() {
            this.setState(function () {
                return {
                    likes: []
                };
            });
        }
    }, {
        key: "addLike",
        value: function addLike(like) {
            if (!like || like.length === 0) {
                return -1;
            } else if (this.state.likes.includes(like)) {
                return -2;
            }

            this.setState(function (prevState) {
                return {
                    likes: prevState.likes.concat([like])
                };
            });
        }
    }, {
        key: "getRandomLike",
        value: function getRandomLike() {
            if (this.state.likes.length > 0) {
                alert("Random Like " + this.state.likes[Math.floor(Math.random() * this.state.likes.length)]);
            } else {
                alert("No Likes.");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { heading: this.state.name, subHeading: this.state.profession }),
                React.createElement(Action, { randomListener: this.getRandomLike }),
                React.createElement(Options, { clearListener: this.clearLikes, options: this.state.likes }),
                React.createElement(AddOptions, { addListener: this.addLike, name: "Add likes" })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.heading
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subHeading
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.randomListener },
                    " Get Random"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "The likes are : "
                ),
                React.createElement(
                    "ul",
                    null,
                    this.props.options.map(function (option, index) {
                        return React.createElement(Option, { key: index, optionName: option });
                    })
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.clearListener, disabled: this.props.options.length <= 0 },
                    "Remove all"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.optionName
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.addListenerLocal = _this6.addListenerLocal.bind(_this6);
        _this6.state = {
            showError: false
        };
        return _this6;
    }

    _createClass(AddOptions, [{
        key: "addListenerLocal",
        value: function addListenerLocal(event) {
            event.preventDefault();
            var showError = !!this.props.addListener(event.target.elements.newLike.value.trim());
            this.setState(function () {
                return {
                    showError: showError
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.showError && React.createElement(
                    "div",
                    null,
                    "Like length should be greater than 0 and not exist already"
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.addListenerLocal },
                    React.createElement("input", { type: "text", name: "newLike" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        " ",
                        this.props.name
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
