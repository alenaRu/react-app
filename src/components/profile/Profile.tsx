import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Button from '../button/Button'
import './Profile.scss';

export interface ProfileProps {
  profile: UserProfile,
  goToListClick: () => void
}

const Profile = (props: ProfileProps) => {
  const { profile, goToListClick } = props;
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

export default Profile;