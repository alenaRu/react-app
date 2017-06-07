// Dependencies
import React from 'react';

// Styles
import './Profile.scss';

// Components
import Button from '../button/Button.jsx'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.profile) {
      return (
        <div className="profile">
          <img src={this.props.profile.image} />
          <div className="contact-info">
            <h2> {this.props.profile.first_name + " " + this.props.profile.last_name + " ID" + this.props.profile.id}  </h2>
            <p> <b>Phone:</b> {this.props.profile.phone} </p>
            <p> <b>Email:</b> {this.props.profile.email} </p>
          </div>
          <p className="contact-text"> {this.props.profile.text} </p>
          <Button onClick={this.props.backClick} text="Back to contact list" />
        </div>
      );
    } else return (
      <div className="profile">
        <p>Choose some profile first...</p>
        <Button onClick={this.props.backClick} text="Back to contact list" />
      </div>);
  }
}

export default Profile;
