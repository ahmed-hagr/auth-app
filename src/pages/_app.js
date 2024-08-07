import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
