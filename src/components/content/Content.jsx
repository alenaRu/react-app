// Dependencies
import React from 'react';

// Styles
import './Content.scss';

// Components
import Profile from '../profile/Profile.jsx';
import ContactList from '../contactList/ContactList.jsx';
import AddContact from '../addContact/AddContact.jsx';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  identifyContent() {
    switch (this.props.activeTab) {
      case 0: return (
        <Profile
          profile={this.props.profile}
          backClick={this.props.goToListClick}
        />);
      case 1: return (
        <ContactList
          data={this.props.data}  
          
          goToProfileClick={this.props.goToProfileClick}
          goToAddClick={this.props.goToAddClick}
          
          contactClick={this.props.contactClick}
        />);
      case 2: return <AddContact data={this.props.data} />;
      default: return;
    }
  }

  render() {
    return (
      <div className="content" >
        {this.identifyContent()}
      </div>
    );
  }
}

export default Content;