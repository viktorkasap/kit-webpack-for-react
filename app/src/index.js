import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import '@csstools/normalize.css';

import { App } from '@app/App';
import { store } from '@app/store';
import '@app/theme/global';

import './assets/scss/styles.scss';

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
