import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as whiteTypes from '../../redux/whiteReducer/types';
import * as blackTypes from '../../redux/blackReducer/types';

import handleEffect from '../../helpers/binders';

import '../styles.css';

const LayerTen = ({ state, setState, side }) => {
  const dispatch = useDispatch();

  const { whiteValue } = useSelector(store => store.whiteReducer);
  const { blackValue } = useSelector(store => store.blackReducer);

  const [intermediateState, setIntermediateState] = useState(null);
  const [tinted, setTinted] = useState(false);

  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [endPosition, setEndPosition] = useState({ x: 0, y: 0 });
  const [storePosition, setStorePosition] = useState({ x: 0, y: 0 });
  const [startTransport, setStartTransport] = useState(false);

  useEffect(() => {
    if (state === intermediateState) return;

    if (side === 'right') setIntermediateState(state);
    setTinted(true);
  }, [state, setState, intermediateState, side]);

  useEffect(() => {
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const store = document.getElementById('store');
    if (!start || !end || !store) return;
    setStartPosition({ x: start.offsetLeft + start.offsetWidth / 2, y: start.offsetTop + start.offsetHeight / 2 });
    setEndPosition({ x: end.offsetLeft + end.offsetWidth / 2, y: end.offsetTop + end.offsetHeight / 2 });
    setStorePosition({ x: store.offsetLeft + store.offsetWidth / 2, y: store.offsetTop + store.offsetHeight / 2 });
  }, []);

  useEffect(() => {
    if (!startTransport) return;
    setTimeout(() => {
      setStartTransport(false);
    }, [2000]);
  }, [startTransport]);

  const handleSubmit = e => {
    e.preventDefault();
    const newValue = e.target.newValue.value;
    if (newValue === whiteValue) return;
    setStartTransport(true);
    setTinted(true);
    setTimeout(() => {
      setState(newValue);
      dispatch({
        type: whiteTypes.ADD_WHITE_VALUE,
        newValue,
      });
      dispatch({
        type: blackTypes.ADD_BLACK_VALUE,
        newValue,
      });
    }, [500]);
  };

  const handleClean = () => {
    dispatch({ type: whiteTypes.CLEAN_VALUE });
    dispatch({ type: blackTypes.CLEAN_VALUE });
    setState(null);
    document.getElementById('start').value = '';
  };

  const handleElement = s => {
    if (s === 'left') {
      return (
        <form className='leftForm' onSubmit={e => handleSubmit(e)}>
          <input name='newValue' id='start' maxLength={5} />
          <button type='submit'>Submit</button>
          <button type='button' onClick={() => handleClean()}>
            Clean
          </button>
        </form>
      );
    }
    if (s === 'right') {
      return (
        <div id='end' className='content'>
          <div className='inputGroup'>
            <span>Prop Drilling</span>
            <span>Value: {state}</span>
          </div>
          <div className='inputGroup'>
            <span>Redux</span>
            <span>White value: {whiteValue}</span>
          </div>
          <div className='inputGroup'>
            <span>Redux</span>
            <span>Black value: {blackValue}</span>
          </div>
        </div>
      );
    }
    return <></>;
  };

  return (
    <div
      className={`container ${handleEffect(state, intermediateState, tinted)} ${tinted ? 'tint' : ''}`}
      style={{
        '--start-x': `${startPosition.x}px`,
        '--start-y': `${startPosition.y}px`,
        '--end-x': `${endPosition.x}px`,
        '--end-y': `${endPosition.y}px`,
        '--store-x': `${storePosition.x}px`,
        '--store-y': `${storePosition.y}px`,
      }}
    >
      {startTransport && <div className='transport' />}
      {handleElement(side)}
    </div>
  );
};

export default LayerTen;
