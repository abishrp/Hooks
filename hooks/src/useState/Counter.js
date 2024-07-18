import React, {useState} from 'react'

const Counter = () => {
    const [count, setcount] = useState(0);
    const [name , setname] = useState(
        {
            firstname:"",
            lastname:""
        }
    )
    const handlefiveclickcounternormal = ()=>
    {
        for(let i=0;i<5;i++)
        {
            setcount(count+1);
        }
    }
    const handlefiveclickcounterwithprevState = ()=>
    {
        for(let i=0;i<5;i++)
            {
                setcount(prevState=>prevState+1);
            }
    }
  return (
    <div className='useState'>
        <button onClick={()=>setcount(count+1)}>useState</button>
        <button onClick={handlefiveclickcounternormal}>useState iteration problem</button>
        <button onClick={handlefiveclickcounterwithprevState}>useState with prevState</button>
        <p>Count : {count}</p>
        <input type="text" onChange={(e)=>setname((prevName)=>({...prevName,firstname: e.target.value}))} placeholder='first name'/>

        <p>First Name:{name.firstname} </p>
        <input type="text" onChange={(e)=>setname((prevName)=>({...prevName,lastname: e.target.value}))} placeholder='last name'/>
        
        <p>Last Name:{name.lastname} </p>

    </div>
  )
}

export default Counter