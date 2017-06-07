// Dependencies
import React from 'react';

// Styles
import './Header.scss';

// Components
import Tab from '../tab/Tab.jsx';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        {
          this.props.tabList.map((name, i) => {
            return <Tab
              key={i}
              tabName={name}
              isSelected={(i === this.props.activeTab) ? true : false}
              tabClick={this.props.tabClick}              
            />;
          })
        }
      </header>
    );
  }
}

export default Header;