import React from 'react';

import '../styles.css';

const LayerTen = ({ state, setState, side }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setState(e.target.newValue.value);
  };

  const handleElement = s => {
    if (s === 'left') {
      return (
        <form className='' onSubmit={e => handleSubmit(e)}>
          <input name='newValue' maxLength={5} />
          <button type='submit'>Submit</button>
        </form>
      );
    }
    if (s === 'right') {
      return (
        <div className='content'>
          <div className='inputGroup'>
            <span>Prop Drilling</span>
            <span>Value: {state}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };
  return <div className='container'>{handleElement(side)}</div>;
};

export default LayerTen;
