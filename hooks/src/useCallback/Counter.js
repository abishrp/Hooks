import React, { useState, useCallback } from 'react';

const Button = ({ handleClick }) => {
  console.log('Button rendered');
  return <button onClick={handleClick}>Increment</button>;
};

const CounterWithCallback = () => {

    console.log('Counterwith');
  const [count, setCount] = useState(0);

  // useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
};

export default CounterWithCallback;


// import React, { useState, useCallback, useEffect } from 'react';

// const CounterWithEffect = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState('');

//   const increment = useCallback(() => {
//     console.log("callback");
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   useEffect(() => {
//     console.log('Effect triggered');
//     setMessage(`The count is ${count}`);
//   }, [increment, count]);

//   return (
//     <div>
//       <p>{message}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default CounterWithEffect;

