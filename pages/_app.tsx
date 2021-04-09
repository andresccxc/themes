import { Provider, useDispatch } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '../styles/globals.css';
import { useEffect } from 'react';
import { loadTheme } from '../redux/themes/actions';
function MyApp({ Component, pageProps }) {
  
  return (
    
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
};

export default MyApp;
