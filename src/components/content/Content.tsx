import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Profile from '../profile/Profile';
import ContactList from '../contactList/ContactList';
import AddContact from '../addContact/AddContact';
import './Content.scss';

export interface Props {
  data: UserProfile[],
  profile: UserProfile,
  activeTab: number,
  goToProfileClick: () => void,
  goToListClick: () => void,
  goToAddClick: () => void,
  onContactClick: (contactID: number) => void,
  addUserClick: (userData: UserProfile) => void
}

class Content extends React.Component<Props, undefined> {
  render() {
    return (
      <div className="content" >
        {this.identifyContent()}
      </div>
    );
  }

  identifyContent() {
    const { data, activeTab, profile, goToListClick, goToProfileClick, goToAddClick, onContactClick, addUserClick } = this.props;
    
    switch (activeTab) {
      case 0: return (
        <Profile
          profile={profile}
          goToListClick={goToListClick}
        />);
      case 1: return (
        <ContactList
          data={data}  
          
          goToProfileClick={goToProfileClick}
          goToAddClick={goToAddClick}
          
          onContactClick={onContactClick}
        />);
      case 2: {
        return (
          <AddContact data={data} addUserClick={addUserClick}/>
        );
      }
      default: return null;
    }
  }
}

export default Content;