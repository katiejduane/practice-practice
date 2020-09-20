// will use useState
// return piece of state AND a function to toggle it
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [state, updateState] = useState(initialValue);
  const toggle = () => {
    updateState(!state);
  };
  return [state, toggle];
}

export default useToggle;
