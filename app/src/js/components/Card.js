import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Card = ({ children, isFeatured = false, className = '' }) => {
  const cardClasses = classNames('card', {
    'card--featured': isFeatured,
    [className]: className,
  });

  return <div className={cardClasses}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  isFeatured: PropTypes.bool,
  className: PropTypes.string,
};
