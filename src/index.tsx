import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './app-navigator';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
