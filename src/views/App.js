import React, { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

import LayerOne from '../components/LayerOne/LayerOne';
import LayerStore from '../components/LayerStore/LayerStore';

import '../index.css';

const App = () => {
  const [state, setState] = useState(null);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayerStore />
        <div className='app' style={{ '--tint-color': 'red' }}>
          <LayerOne state={state} setState={setState} side='left' />
          <LayerOne state={state} setState={setState} side='right' />
        </div>
        <button type='button' className='refreshButton' onClick={() => document.location.reload(true)}>
          Refresh
        </button>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
