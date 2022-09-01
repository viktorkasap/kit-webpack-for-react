import React from 'react';
import PropTypes from 'prop-types';

export const Stack = ({ children }) => {
  return <div className="stack">{children}</div>;
};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
};
