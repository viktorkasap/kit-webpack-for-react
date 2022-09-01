import React from 'react';

import { Header } from '@app/components';
import { Positions } from '@app/features/positions/Positions';
import { FilteredPanel } from '@app/components/FilteredPanel';

export const App = () => (
  <>
    <Header />
    <div className="container">
      <FilteredPanel />
      <Positions />
    </div>
  </>
);
