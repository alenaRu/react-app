import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../profile/Profile.jsx';
import ContactList from '../contactList/ContactList.jsx';
import AddContact from '../addContact/AddContact.jsx';
import './Content.scss';

class Content extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    profile: PropTypes.object,
    activeTab: PropTypes.number,
    goToProfileClick: PropTypes.func,
    goToListClick: PropTypes.func,
    goToAddClick: PropTypes.func,
    contactClick: PropTypes.func,
    addContactClick: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content" >
        {this.identifyContent()}
      </div>
    );
  }

  identifyContent() {
    const { data, activeTab, profile, goToListClick, goToProfileClick, goToAddClick, onContactClick, addContactClick } = this.props;
    
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
          <AddContact data={data}/>
        );
      }
      default: return;
    }
  }
}

export default Content;