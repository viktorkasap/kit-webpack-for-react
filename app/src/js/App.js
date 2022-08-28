import React from 'react';
import { Header } from '@app/components';
import { Positions } from '@app/features/positions/Positions';
import { FilteredPanel } from '@app/components/FilteredPanel';
import { Hello } from '@app/Hello';

export const App = () => (
  <>
    APp
    <Hello />
    <Header />
    <div className="container">
      <FilteredPanel />
      <Positions />
    </div>
  </>
);
