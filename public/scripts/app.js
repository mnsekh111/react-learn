'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = props;
        _this.clearLikes = _this.clearLikes.bind(_this);
        _this.clearLike = _this.clearLike.bind(_this);
        _this.addLike = _this.addLike.bind(_this);
        _this.getRandomLike = _this.getRandomLike.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var state = JSON.parse(localStorage.getItem(this.constructor.name));
                this.setState(function () {
                    return state;
                });
                console.log("State is loaded");
            } catch (ex) {
                console.log("No valid previous state");
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            try {
                if (JSON.stringify(prevState) !== JSON.stringify(this.state)) {
                    localStorage.setItem(this.constructor.name, JSON.stringify(this.state));
                    console.log("State is saved.");
                }
            } catch (ex) {}
        }
    }, {
        key: 'clearLikes',
        value: function clearLikes() {
            this.setState(function () {
                return { likes: [] };
            });
        }
    }, {
        key: 'clearLike',
        value: function clearLike(like) {
            this.setState(function (prevState) {
                return {
                    likes: prevState.likes.filter(function (item) {
                        return item !== like;
                    })
                };
            });
        }
    }, {
        key: 'addLike',
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
        key: 'getRandomLike',
        value: function getRandomLike() {
            if (this.state.likes.length > 0) {
                alert("Random Like " + this.state.likes[Math.floor(Math.random() * this.state.likes.length)]);
            } else {
                alert("No Likes.");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, { heading: this.state.name, subHeading: this.state.profession }),
                _react2.default.createElement(Action, { randomListener: this.getRandomLike }),
                _react2.default.createElement(Options, { clearOneListener: this.clearLike, clearListener: this.clearLikes, options: this.state.likes }),
                _react2.default.createElement(AddOptions, { addListener: this.addLike, name: 'Add likes' })
            );
        }
    }]);

    return App;
}(_react2.default.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    this.props.heading
                ),
                _react2.default.createElement(
                    'h2',
                    null,
                    this.props.subHeading
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.randomListener },
                    ' Get Random'
                )
            );
        }
    }]);

    return Action;
}(_react2.default.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // console.log(this.constructor.name + " is updated");
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'The likes are : '
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    this.props.options.map(function (option, index) {
                        return _react2.default.createElement(Option, { key: index, optionName: option, clearOneListener: _this5.props.clearOneListener });
                    })
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.props.clearListener, disabled: this.props.options.length <= 0 },
                    'Remove all'
                )
            );
        }
    }]);

    return Options;
}(_react2.default.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // console.log(this.constructor.name + " is unmounted");
        }
    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    this.props.optionName,
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this7.props.clearOneListener(_this7.props.optionName);
                            } },
                        ' Delete this !'
                    )
                )
            );
        }
    }]);

    return Option;
}(_react2.default.Component);

var AddOptions = function (_React$Component6) {
    _inherits(AddOptions, _React$Component6);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this8 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this8.addListenerLocal = _this8.addListenerLocal.bind(_this8);
        _this8.state = {
            showError: false
        };
        return _this8;
    }

    _createClass(AddOptions, [{
        key: 'addListenerLocal',
        value: function addListenerLocal(event) {
            event.preventDefault();
            var showError = !!this.props.addListener(event.target.elements.newLike.value.trim());
            event.target.elements.newLike.value = "";
            this.setState(function () {
                return {
                    showError: showError
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.state.showError && _react2.default.createElement(
                    'div',
                    null,
                    'Like length should be greater than 0 and not exist already'
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.addListenerLocal },
                    _react2.default.createElement('input', { type: 'text', name: 'newLike' }),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        ' ',
                        this.props.name
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(_react2.default.Component);

var StatelessComp = function StatelessComp(props) {
    return _react2.default.createElement(
        'div',
        null,
        'This is a state less component : ',
        props.name
    );
};

StatelessComp.defaultProps = {
    name: "State Default"
};

App.defaultProps = {
    name: "Jesse Lingaard",
    profession: "Footballer",
    age: 25,
    location: "Manchester",
    about: "I'm Man Utd's greatest number 10",
    likes: ["girls", "films", "football"]
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
