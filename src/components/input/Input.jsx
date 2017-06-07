// Dependencies
import React from 'react';

// Styles
import './Input.scss';

// Components
//import Tab from '../tab/Tab.jsx';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleUnfocus = this.handleUnfocus.bind(this);
        this.defaultValue = this.props.defaultValue;
    }

    handleFocus(event) {
        if (this.input.value === this.defaultValue) {
            this.input.value = '';
        }
    }

    handleUnfocus(event) {
        if (this.input.value === '') {
            this.input.value = this.defaultValue;
        }
    }

    render() {
        return (
            <input type="text"
                defaultValue={this.defaultValue}
                onFocus={this.handleFocus}
                onBlur={this.handleUnfocus}
                onChange={this.props.handleSearch}
                name={this.props.name}
                required={this.props.required}
                ref={(input) => this.input = input}
            />
        );
    }
}

export default Input;