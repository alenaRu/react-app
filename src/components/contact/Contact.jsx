// Dependencies
import React from 'react';

// Styles
import './Contact.scss';

// Components

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="contact" id={this.props.id} onClick={this.props.contactClick}>
        <img src={this.props.img} />

        <div className="contact-data" >
          <h6> {this.props.name} </h6>
          <p> {this.props.num} </p>
        </div>

      </div>
    );
  }
}

export default Contact;