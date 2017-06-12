import * as React from 'react';
import './Input.scss';

export interface InputProps {
    defaultValue: string,
    handleSearch?: (event: any) => void,
    name: string,
    required?: boolean
}

class Input extends React.Component<InputProps, undefined> {
    input: HTMLInputElement;

    handleFocus = (event: any) => {
        if (this.input.value === this.props.defaultValue) {
            this.input.value = '';
        }
    }

    handleUnfocus = (event: any) => {
        if (this.input.value === '') {
            this.input.value = this.props.defaultValue;
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