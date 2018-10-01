import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import { persistStore } from 'redux-persist';

  ReactDOM.render(
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>, document.getElementById('root'));
  registerServiceWorker();
