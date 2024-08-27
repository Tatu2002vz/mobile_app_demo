import {Provider} from 'react-redux';
import {store} from './store';
import RootNavigator from './navigation/RootNavigator';
import React from 'react';

const App = () => {
  
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
