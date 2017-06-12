import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const _onClickWrapper = (index, onClick) => () => {
    if (_.isFunction(onClick)) {
        onClick(index);
    }
};

const Contact = ({ contact, onContactClick }) => {
  if (!contact) {
    return <div></div>;
  }
  
  const { id, image, first_name, last_name, phone} = contact;
  return (
    <div className="contact" id={id} onClick={_onClickWrapper(id, onContactClick)}>
      <img src={image} />

      <div className="contact-data" >
        <h6> {`${first_name} ${last_name}`} </h6>
        <p> {phone} </p>
      </div>

    </div>
  );

}

Contact.propTypes = {
    contact: PropTypes.object,
    onContactClick: PropTypes.func
};

export default Contact;