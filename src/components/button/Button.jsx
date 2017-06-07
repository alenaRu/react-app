// Dependencies
import React from 'react';

// Styles
import './Button.scss';

// Components

class Button extends React.Component {
  constructor(props) {
    super(props);
    }
    
  render() {
    return (
      <button onClick={this.props.onClick}>
        <p>
          {this.props.text}
        </p>
      </button>);
  }
}

export default Button;