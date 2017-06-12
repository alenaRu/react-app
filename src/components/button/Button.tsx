import * as React from 'react';
import * as _ from 'lodash';
import './Button.scss';


export interface ButtonProps {
  onClick?: (data: any) => void,
  text: string,
  className?: string
}

const Button = (props: ButtonProps) => {
  let clsWrapper = ' ';
  const { onClick, text, className } = props;

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

export default Button;