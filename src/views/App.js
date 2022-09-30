import React, { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';

import LayerOne from '../components/LayerOne/LayerOne';

import '../index.css';

const App = () => {
  const [state, setState] = useState(null);

  return (
    <ReduxProvider store={store}>
      <div className='app'>
        <LayerOne state={state} setState={setState} side='left' />
        <LayerOne state={state} setState={setState} side='right' />
      </div>
    </ReduxProvider>
  );
};

export default App;
