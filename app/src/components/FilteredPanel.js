import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearedFilteredPositions, removedItemFilteredPositions } from '../features/positions/PositionsSlice';

import { Card } from './Card';
import { Stack } from './Stack';
import { Badge } from './Badge';

export const FilteredPanel = () => {
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.positions.filtered);
  const handleClearPanel = () => {
    dispatch(clearedFilteredPositions());
  };

  const handleClear = (item) => () => {
    dispatch(removedItemFilteredPositions(item));
  };

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {filteredItems.map((item) => (
            <Badge key={item} variant="clearable" onClear={handleClear(item)}>
              {item}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={handleClearPanel}>
          Clear
        </button>
      </div>
    </Card>
  );
};
