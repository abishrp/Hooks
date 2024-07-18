// import React, {useState,useMemo} from 'react'

// const CounterMemo = () => {
//     const [count, setcount] = useState(0);
//     const [name , setname] = useState(
//         {
//             firstname:"",
//             lastname:""
//         }
//     );
//     const [num,setnum]= useState(1);
//     const handlefiveclickcounternormal = ()=>
//     {
//         for(let i=0;i<5;i++)
//         {
//             setcount(count+1);
//         }
//     }
//     const handlefiveclickcounterwithprevState = ()=>
//     {
//         for(let i=0;i<5;i++)
//             {
//                 setcount(prevState=>prevState+1);
//             }
//     }

//     const factorial=(n)=>
//     {
//         console.log("factorial part executing")
//         if(n<=1)
//         {
//             return 1;
//         }
//         else
//         {
//             return n*factorial(n-1);
//         }
//     }
//     const factorialfunction = useMemo(()=>{factorial(num)},[num])
//   return (
//     <div className='useState'>
//         <button onClick={()=>setcount(count+1)}>useState</button>
//         <button onClick={handlefiveclickcounternormal}>useState iteration problem</button>
//         <button onClick={handlefiveclickcounterwithprevState}>useState with prevState</button>
//         <p>Count : {count}</p>

        

//         <input type="text" onChange={(e)=>setname((prevName)=>({...prevName,firstname: e.target.value}))} placeholder='first name'/>
//         <p>First Name:{name.firstname} </p>
//         <input type="text" onChange={(e)=>setname((prevName)=>({...prevName,lastname: e.target.value}))} placeholder='last name'/>
//         <p>Last Name:{name.lastname} </p>

        

//         <p>Factorial of a number</p>
//         <input type="text" placeholder="Enter the number to find factorial" onChange={(e)=>setnum(e.target.value)} />
//         <p>Factorial of a number is {factorialfunction}</p>
        

//     </div>
//   )
// }

// export default CounterMemo



import React, { useState, useMemo } from 'react';

const CounterMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    firstname: '',
    lastname: ''
  });
  const [num, setNum] = useState(1);

  const handleFiveClickCounterNormal = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };

  const handleFiveClickCounterWithPrevState = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevState => prevState + 1);
    }
  };

  const factorial = (n) => {
    console.log('factorial part executing');
    if (n <= 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = n; i > 1; i--) {
        result *= i;
      }
      return result;
    }
  };

//   const factorialResult = useMemo(() => factorial(num), [num]);
const factorialResult=factorial(num);

  return (
    <div className='useState'>
      <button onClick={() => setCount(count + 1)}>useState</button>
      <button onClick={handleFiveClickCounterNormal}>useState iteration problem</button>
      <button onClick={handleFiveClickCounterWithPrevState}>useState with prevState</button>
      <p>Count: {count}</p>

      <input
        type="text"
        onChange={(e) =>
          setName((prevName) => ({ ...prevName, firstname: e.target.value }))
        }
        placeholder='First name'
      />
      <p>First Name: {name.firstname}</p>

      <input
        type="text"
        onChange={(e) =>
          setName((prevName) => ({ ...prevName, lastname: e.target.value }))
        }
        placeholder='Last name'
      />
      <p>Last Name: {name.lastname}</p>

      <p>Factorial of a number</p>
      <input
        type="number"
        placeholder="Enter the number to find factorial"
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <p>Factorial of the number is {factorialResult}</p>
    </div>
  );
};

export default CounterMemo;


