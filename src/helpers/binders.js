const handleEffect = (state, intermediateState, tinted) => {
  if (tinted) return 'tintAnimation';
  if (state === intermediateState) return '';
  return 'tintAnimation';
};

export default handleEffect;
