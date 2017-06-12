import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

class Input extends React.Component {
    static propTypes = {
        defaultValue: PropTypes.string,
        handleSearch: PropTypes.func,
        name: PropTypes.string,
        required: PropTypes.bool
    }

    constructor(props) {
        super(props);

    }

    handleFocus = (event) => {
        if (this.input.value === this.defaultValue) {
            this.input.value = '';
        }
    }

    handleUnfocus = (event) => {
        if (this.input.value === '') {
            this.input.value = this.defaultValue;
        }
    }

    render() {
        const { defaultValue, handleSearch, name, required } = this.props;
        return (
            <input type="text"
                defaultValue={defaultValue}
                onFocus={this.handleFocus}
                onBlur={this.handleUnfocus}
                onChange={handleSearch}
                name={name}
                required={required}
                ref={(input) => this.input = input}
            />
        );
    }
}

export default Input;