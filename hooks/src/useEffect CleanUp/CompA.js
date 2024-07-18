import React,{useEffect} from 'react'

const CompA = () => {
    useEffect(()=>
    {
        console.log("Use Effect");
        const setvalue= setInterval(()=>
        {
            console.log("ApI call executed");
        },2000)
        return ()=>
        {
            clearInterval(setvalue);
            console.log("unmounted");
        }
    },[])
  return (
    <div>
        <p>Component A</p>
        <hr />
    </div>
  )
}

export default CompA