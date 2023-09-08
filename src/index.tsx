import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import store from './app/store';
import { AppRouting } from './AppRouting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouting />
    </React.StrictMode>
  </Provider>,
);

reportWebVitals();
