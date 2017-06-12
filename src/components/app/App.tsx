import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import './App.scss';

const DATA = require<UserProfile[]>('../../MOCK_DATA.json');

//const DATA: UserProfile[] = [];

export interface AppProps {
    initTab?: number,
    initProfile?: number
}

const _tabs = {
  profile: 0,
  contacts: 1,
  addContact: 2
};

export default class App extends React.Component<any, any> {
  tabList: string[];
  data: UserProfile[];
  state: {
    tabNumber: number,
    profileID: number
  };

  constructor(props: any) {
    super(props);

    this.data = DATA;
    this.tabList = ['Profile', 'Contact list', 'Add contact'];

    this.state = {
      tabNumber: props.initTab || -1,
      profileID: props.initProfile || -1
    };
  }

  render() {
    const { profileID, tabNumber } = this.state;

    const currProfile : UserProfile = this.data[profileID - 1];

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

  tabClick = (tabIndex: any) => {
    this.setState({ tabNumber: tabIndex });
  }

  onContactClick = (contactID: any) => {
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

  _getProfileName = (profile: UserProfile) => {
    let profileName = '-';

    if (!profile) {
      return profileName;
    }

    return `${profile.first_name} ${profile.last_name}`;
  };
};
