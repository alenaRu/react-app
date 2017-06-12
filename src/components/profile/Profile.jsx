import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button.jsx'
import './Profile.scss';

const Profile = ({ profile, goToListClick }) => {
  if (!profile) {

    return (
      <div className="profile">
        <p>Choose some profile first...</p>
        <Button onClick={goToListClick} text="Back to contact list" />
      </div>);
  }

  return (
      <div className="profile">
        <img src={profile.image} />
        <div className="contact-info">
          <h2> {`${profile.first_name} ${profile.last_name}  ID${profile.id}`} </h2>
          <p> <b>Phone:</b> {profile.phone} </p>
          <p> <b>Email:</b> {profile.email} </p>
        </div>
        <p className="contact-text"> {profile.text} </p>
        <Button onClick={goToListClick} text="Back to contact list" />
      </div>
    );
};

Profile.propTypes = {
  profile: PropTypes.object,
  goToListClick: PropTypes.func
}

export default Profile;