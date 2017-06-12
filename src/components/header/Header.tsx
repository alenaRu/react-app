import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import Tab from '../tab/Tab';
import './Header.scss';

export interface HeaderProps {
  activeTab: number,
  tabClick: (tabIndex: number) => void,
  tabList: string[]
}

const Header = (props: HeaderProps) => {
  const { activeTab, tabClick, tabList } = props;

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

export default Header;