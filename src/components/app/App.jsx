// Dependencies
import React from 'react';

//Data
import DATA from '../../MOCK_DATA.json';


// Components
import Header from '../header/Header.jsx';
import Content from '../content/Content.jsx';
import Footer from '../footer/Footer.jsx';

// Styles
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    //Data
    this.data = DATA;

    //Header
    this.tabList = ['Profile', 'Contact list', 'Add contact'];
    this.tabClick = this.tabClick.bind(this);

    //Content.ContactList    
    this.contactClick = this.contactClick.bind(this);

    this.goToProfileClick = this.goToProfileClick.bind(this);
    this.goToListClick = this.goToListClick.bind(this);
    this.goToAddClick = this.goToAddClick.bind(this);

    this.state = {
      tabNumber: 2,
      profileID: -1
    }
  }

  tabClick(event) {
    const selectedTabNum = this.tabList.indexOf(event.target.textContent);
    this.setState({ tabNumber: selectedTabNum });
  }

  contactClick(event) {
    const selectedContactID = event.currentTarget.id;
    this.setState({ tabNumber: 0, profileID: selectedContactID });
  }

  goToProfileClick() {
    this.setState({ tabNumber: 0 });
  }

  goToListClick() {
    this.setState({ tabNumber: 1 });
  }

  goToAddClick() {
    this.setState({ tabNumber: 2 });
  }

  render() {
    const currProfile = this.data[this.state.profileID - 1];

    return (
      <div className="site-wrapper">
        <Header
          activeTab={this.state.tabNumber}
          tabList={this.tabList}
          tabClick={this.tabClick}
        />

        <Content
          data={this.data}
          profile={currProfile}
          activeTab={this.state.tabNumber}      

          goToProfileClick={this.goToProfileClick}
          goToListClick={this.goToListClick}
          goToAddClick={this.goToAddClick}
          contactClick={this.contactClick}
        />
        <Footer
          profileName={currProfile ? `${currProfile.first_name} ${currProfile.last_name}` : ""}
          contactListLength={this.data.length} />
        }
      </div>
    )
  }
}

export default App;