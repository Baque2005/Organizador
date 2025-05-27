import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({ children, className, onClick, type = 'button', disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold transition duration-200 ease-in-out',
        'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400',
        'disabled:bg-gray-400 disabled:cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default Button;