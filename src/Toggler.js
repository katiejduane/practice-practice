import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
  // const [isHappy, setIsHappy] = useState(true);
  // const [heartBroken, setHeartBroken] = useState(false);
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [heartBroken, toggleheartBroken] = useToggle(false);
  // const toggle = () => {
  //   setIsHappy(!isHappy);
  // };
  // one option
  // return <h1 onClick={toggle}>{isHappy ? ' 😁' : ' 😞'}</h1>
  // another option:
  // return <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? ' 😁' : ' 😞'}</h1>
  // more reusable > make your own custom hook!
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? ' 😁' : ' 😞'}</h1>
      <h1 onClick={toggleheartBroken}>{heartBroken ? ' 💔' : ' 💗'}</h1>
    </div>
  );
}

export default Toggler;
