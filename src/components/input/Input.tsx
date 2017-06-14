import * as React from 'react';
import * as _ from 'lodash';
import './Input.scss';

export interface InputProps {
    defaultValue: string,
    handleInput?: (inputName: string, inputValue: string) => void,
    name: string,
    required?: boolean,
    inputRef?: string
}

class Input extends React.Component<InputProps, undefined> {
    input: HTMLInputElement;

    render() {
        let { defaultValue, handleInput, name, required, inputRef } = this.props;
        return (
            <input type="text"
                defaultValue={defaultValue}

                name={name}
                required={required}
                ref={
                    (input) => this.input = input
                }

                onFocus={this._handleFocus}
                onBlur={this._handleUnfocus}
                onChange={this._onChangeWrapper(handleInput)}
            />
        );
    }

    _handleFocus = (event: any) => {
        if (this.input.value === this.props.defaultValue) {
            this.input.value = '';
        }
    }

    _handleUnfocus = (event: any) => {
        if (this.input.value === '') {
            this.input.value = this.props.defaultValue;
        }
    }

    _isEmpty = () => {
        let val = this.input.value;
        return (val === '' || val === this.props.defaultValue);
    };

    _onChangeWrapper = (onChange: (inputName: string, inputValue: string) => void) => () => {
        const { value, name } = this.input;
        if (_.isFunction(onChange) && !this._isEmpty()) {
           onChange(name, value);
        }
    };
}

export default Input;