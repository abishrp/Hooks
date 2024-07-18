import React,{useEffect,useRef} from 'react'

const StyleComponent = () => {
    const paraColor=useRef(null);
    const colors =["blue","green","grey","aliceblue","purple","navy"];
    const selectedColor=useRef(null);

    const stylePara = ()=>
    {
        const randomcolor=Math.floor(Math.random()*colors.length);
        paraColor.current.style.color=colors[randomcolor];
        selectedColor.current=colors[randomcolor]
        console.log("Selected color in function",selectedColor.current);

    }

    useEffect(()=>
    {
        console.log(paraColor);
        console.log(paraColor.current);
    })

    useEffect(()=>
        {
            console.log("Color in useeffect",selectedColor.current);
    
        },[selectedColor.current])

  return (
    <div>
        <button onClick={stylePara}>Useref button</button>
        <p ref={paraColor}>useref para</p>
    </div>
  )
}

export default StyleComponent