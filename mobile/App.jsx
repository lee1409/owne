import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebase from './firebase';
import Route from './src/navigations/route';
import store from './src/redux/store';

// eslint-disable-next-line no-undef
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const rrfConfig = {
  userProfile: 'user',
  useFirestoreForProfile: true,
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rrfConfig}
      dispatch={store.dispatch}
    >
      <Route />
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
