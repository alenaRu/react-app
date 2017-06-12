import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import './Footer.scss';

export interface FooterProps {
  profileName: string,
  contactListLength: number
}

const Footer = (props: FooterProps) => {
  const { profileName, contactListLength } = props;


  return (
    <footer>
      <p>Profile:
        <span>{profileName}</span>
      </p>

      <p>User in list:
        <span>{contactListLength}</span>
      </p>
    </footer>
  );
}

export default Footer;