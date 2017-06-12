//import * as React from 'react';
import { UserProfile } from '../../interfaces/UserProfile';
import * as _ from 'lodash';
import './Contact.scss';

var React = require<any>('react');
var ReactDOM = require<any>('react-dom');

export interface ContactProps {
  contact: UserProfile,
  onContactClick: (contactID: number) => void
}


const Contact = (props: ContactProps) => {
  const { contact, onContactClick } = props;
  if (!contact) {
    return <div></div>;
  }

  const { id, image, first_name, last_name, phone } = contact;
  return (
    <div className="contact" id={"contact" + id } onClick={_onClickWrapper(id, onContactClick)}>
      <img src={image} />

      <div className="contact-data" >
        <h6> {`${first_name} ${last_name}`} </h6>
        <p> {phone} </p>
      </div>

    </div>
  );

}

const _onClickWrapper = (index: number, onClick: (contactID: number) => void) => () => {
  if (_.isFunction(onClick)) {
    onClick(index);
  }
};



export default Contact;