import React from 'react';

import { Header } from './components';
import { Positions } from './features/positions/Positions';
import { FilteredPanel } from './components/FilteredPanel';

console.log('egg');

export const App = () => (
  <>
    <Header />
    <div className="container">
      <FilteredPanel />
      <Positions />
    </div>
  </>
);
