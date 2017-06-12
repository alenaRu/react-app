import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DATA from '../../MOCK_DATA.json';
import Header from '../header/Header.jsx';
import Content from '../content/Content.jsx';
import Footer from '../footer/Footer.jsx';
import './App.scss';

const _tabs = {
  profile: 0,
  contacts: 1,
  addContact: 2
};

class App extends Component {
  static propTypes = {
    initTab: PropTypes.number,
    initProfile: PropTypes.number
  }

  constructor(props) {
    super(props);

    this.data = DATA;
    this.tabList = ['Profile', 'Contact list', 'Add contact'];

    this.state = {
      tabNumber: props.initTab || -1,
      profileID: props.initProfile || -1
    }
  }

  render() {
    const { profileID, tabNumber } = this.state;

    const currProfile = this.data[profileID - 1];

    return (
      <div className="site-wrapper">
        <Header
          activeTab={tabNumber}
          tabList={this.tabList}
          tabClick={this.tabClick}
        />

        <Content
          data={this.data}
          profile={currProfile}
          activeTab={tabNumber}

          goToProfileClick={this.goToProfileClick}
          goToListClick={this.goToListClick}
          goToAddClick={this.goToAddClick}
          onContactClick={this.onContactClick}
        />
        <Footer
          profileName={this._getProfileName(currProfile)}
          contactListLength={this.data.length} />
        }
      </div>
    )
  }

  tabClick = (tabIndex) => {
    this.setState({ tabNumber: tabIndex });
  }

  onContactClick = (contactID) => {
    this.setState(
      {
        tabNumber: _tabs.profile,
        profileID: contactID
      });
  }

  goToProfileClick = () => {
    this._changeTab(_tabs.profile);
  }

  goToListClick = () => {
    this._changeTab(_tabs.contacts);
  }

  goToAddClick = () => {
    this._changeTab(_tabs.addContact);
  }

  _changeTab = (tabId = 0) => {
    this.setState({
      tabNumber: tabId
    });
  };

  _getProfileName = (profile) => {
    let profileName = '-';

    if (!profile) {
      return profileName;
    }

    return `${profile.first_name} ${profile.last_name}`;
  };

}

export default App;