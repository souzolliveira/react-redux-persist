import React, { useState } from 'react';

import LayerOne from '../components/LayerOne/LayerOne';

import '../index.css';

const App = () => {
  const [state, setState] = useState();

  return (
    <div className='app'>
      <LayerOne state={state} setState={setState} side='left' />
      <LayerOne state={state} setState={setState} side='right' />
    </div>
  );
};

export default App;
