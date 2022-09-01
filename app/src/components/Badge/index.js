import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addedFilteredPositions } from '@app/features/positions/PositionsSlice';

import { BadgeWrapper, BadgeText, BadgeClose, BadgeCloseWrapper } from './styled';

export const Badge = ({ variant = 'basic', colorScheme = 'light', children, onClear, noClickable = false }) => {
  const dispatch = useDispatch();

  const handleFilter = (item) => () => {
    dispatch(addedFilteredPositions(item));
  };

  return (
    <BadgeWrapper variant={variant} colorScheme={colorScheme}>
      {noClickable && <BadgeText>{children}</BadgeText>}
      {!noClickable && <BadgeText onClick={handleFilter(children)}>{children}</BadgeText>}
      {variant === 'clearable' && (
        <>
          {noClickable && (
            <BadgeCloseWrapper>
              <span className="material-symbols-rounded">close</span>
            </BadgeCloseWrapper>
          )}
          {!noClickable && (
            <BadgeCloseWrapper onClick={onClear}>
              <BadgeClose className="material-icons-sharp">close</BadgeClose>
            </BadgeCloseWrapper>
          )}
        </>
      )}
    </BadgeWrapper>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'clearable', 'rounded']),
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']),
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  noClickable: PropTypes.bool,
};
