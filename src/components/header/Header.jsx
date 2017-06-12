import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../tab/Tab.jsx';
import './Header.scss';

const Header = ({ activeTab, tabClick, tabList }) => {
  
  return (
    <header>
      {
        tabList.map((name, i) => {
          return (
            <Tab
              key={i}
              name={name}
              tabIndex={i}
              selected={(i === activeTab)}
              onClick={tabClick}
            />
          );
        })
      }
    </header>
  );
};

Header.propTypes = {
  activeTab: PropTypes.number,
  tabClick: PropTypes.func,
  tabList: PropTypes.arrayOf(PropTypes.string)
}

export default Header;