import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import intersection from 'lodash/intersection';

import { Card, Stack, Badge } from '@app/components';

import { selectPositionById } from './PositionsSlice';

export const Position = ({ positionId }) => {
  const filteredPositions = useSelector((state) => state.positions.filtered);
  const positionItem = useSelector((state) => selectPositionById(state, positionId));
  const { company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = positionItem;
  const badges = [role, level, ...languages, ...tools];

  const filteredIntersection = intersection(filteredPositions, badges);

  if (filteredPositions.length > 0 && filteredIntersection.length === 0) {
    return null;
  }

  return (
    <Card isFeatured={featured}>
      <div className="job-position">
        <div className="job-position-info">
          <img className="job-position-avatar" src={logo} alt={company} />
          <div className="job-position-body">
            <div className="job-postion-company">
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary" noClickable={true}>
                      NEW!
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark" noClickable={true}>
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className="job-position-title">{position}</h2>
            <Stack>
              <div className="job-position-meta">{postedAt}</div>
              <div className="job-position-meta">{contract}</div>
              <div className="job-position-meta">{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {badges.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
};

Position.propTypes = {
  positionId: PropTypes.number,
};
