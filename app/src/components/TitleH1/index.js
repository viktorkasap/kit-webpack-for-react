import React from 'react';
import PropTypes from 'prop-types';

export const TitleH1 = ({ children }) => {
  return <h1>{children}</h1>;
};

TitleH1.propTypes = {
  children: PropTypes.node,
};
