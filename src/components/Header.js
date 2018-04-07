import {capitalize, energise} from "../util";
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header__title">{energise(capitalize(this.props.heading))}</div>
                    <div className="header__subheading">{this.props.subHeading}</div>
                </div>
            </div>
        );
    }
}

export default Header;