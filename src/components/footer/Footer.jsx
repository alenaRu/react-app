import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ profileName, contactListLength }) => {

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

Footer.propTypes = {
  profileName: PropTypes.string,
  contactListLength: PropTypes.number
}

export default Footer;