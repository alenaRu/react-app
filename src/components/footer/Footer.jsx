// Dependencies
import React from 'react';

// Styles
import './Footer.scss';

// Components
//import Tab from '../tab/Tab.jsx';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  getProfileName() {
    return this.props.profileName ? <p>Profile: <span> {this.props.profileName} </span></p> : <p>No opened profile</p>;
  }

  render() {
    return (
      <footer>
        {this.getProfileName()}
        <p>User in list: <span>{this.props.contactListLength} </span></p>
      </footer>
    );
  }
}

export default Footer;