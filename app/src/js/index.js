import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import '../scss/styles.scss';

import { store } from './store';
import { App } from './App';

const init = () => {
  const container = document.getElementById('root-container');

  if (container) {
    const root = createRoot(container);

    root.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  }
};

init();
