import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import Filter from './components/Shelf/Filter'

import { Provider } from 'react-redux';
import store from './services/store'

import './index.scss';

ReactDOM.render(
(
  <Provider store={store( {} )}>
    <App>
      <Filter/>
    </App>
  </Provider>
),
document.getElementById('root')
);
