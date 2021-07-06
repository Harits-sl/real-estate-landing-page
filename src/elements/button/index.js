import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push('btn-primary');
  if (!props.isPrimary) className.push('btn-secondary');

  return (
    <button type="button" className={className.join(' ')} style={props.style}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  isPrimary: propTypes.bool,
};

export default Button;
