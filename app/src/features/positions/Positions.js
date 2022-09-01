import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import mockPositions from '../../mock/positions.json';

import { Position } from './Position';
import { addedPositions, selectPositionsIds } from './PositionsSlice';

const PositionsRender = () => {
  const positionsIds = useSelector(selectPositionsIds);

  return (
    <div className="job-list">
      {positionsIds.map((positionId) => (
        <Position key={positionId} positionId={+positionId} />
      ))}
    </div>
  );
};

export const Positions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addedPositions(mockPositions));
  }, [dispatch]);

  return <PositionsRender />;
};
