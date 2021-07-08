import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push('btn-primary');
  if (props.isSecondary) className.push('btn-secondary');
  if (props.isCircle) className.push('rounded-circle');
  if (props.isRoundedPill) className.push('rounded-pill');

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
  isSecondary: propTypes.bool,
  isCircle: propTypes.bool,
  isRoundedPill: propTypes.bool,
};

export default Button;
