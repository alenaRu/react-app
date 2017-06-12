import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import './Button.scss';

const Button = ({ onClick, text, className }) => {
  let clsWrapper = ' ';

  if (!_.isUndefined(className)) {
    clsWrapper += `${className} `;
  }

  return (
    <button onClick={onClick} className={clsWrapper}>
      <p>
        {text}
      </p>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

export default Button;