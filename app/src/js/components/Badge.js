import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { RemoveIcon } from '../icons';
import { addedFilteredPositions } from '../features/positions/PositionsSlice';

export const Badge = ({ variant = 'basic', colorScheme = 'light', children, onClear, noClickable = false }) => {
  const dispatch = useDispatch();

  const handleFilter = (item) => () => {
    dispatch(addedFilteredPositions(item));
  };

  return (
    <div className={`badge badge--${variant} badge--${colorScheme}`}>
      {noClickable && <span>{children}</span>}
      {!noClickable && <span onClick={handleFilter(children)}>{children}</span>}
      {variant === 'clearable' && (
        <>
          {noClickable && (
            <div className="badge-remover">
              <RemoveIcon />
            </div>
          )}
          {!noClickable && (
            <div className="badge-remover" onClick={onClear}>
              <RemoveIcon />
            </div>
          )}
        </>
      )}
    </div>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  noClickable: PropTypes.bool,
};
