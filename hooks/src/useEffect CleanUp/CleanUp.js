import React,{useState,useEffect} from 'react'
import CompA from './CompA';

const CleanUp = () => {
    const [toggle,setToggle]=useState(true);
  return (
    <div>
        <p>Useeffect with cleanup</p>
        <button onClick={()=>{setToggle(!toggle)}}>show or hide compA</button>
        {toggle?<CompA />: null}
    </div>
  )
}

export default CleanUp