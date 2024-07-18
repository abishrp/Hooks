import React, { useState, useEffect } from "react";
const Count = () => {
    const [count, setcount] = useState(0);
    const [msg, setmsg] = useState("Initial Message");

    // 1.calls every time
    // useEffect(() => {
    //     //componentdidmount
    //     //componentdidupdate
    //     console.log("component mounted");
    //     console.log(msg);
    //     console.log("useEffect Count", count);

    // }
    // )

    // 2.only once when initial render

    // useEffect(()=>
    //     {
    //         //componentdidmount
    //         console.log("component mounted");
    //         console.log("New message",msg);
    //         console.log("useEffect Count",count);


    //     },[]

    // )

   // 3.continuous render when particular operation changes
    // useEffect(() => {
    //     //componentdidmount
    //     //componentdidupdate
    //     console.log("component mounted");
    //     console.log(msg);
    //     console.log("useEffect Count", count);

    // },[count]
    // )

    //4.by making multiple dependencies

    // useEffect(() => {
    //     //componentdidmount
    //     //componentdidupdate
    //     console.log("component mounted");
    //     console.log(msg);
    //     console.log("useEffect Count", count);

    // },[count,msg]
    // )

    //in above can also pass probs

    return (
        <div>
            <button onClick={() => setcount(count + 1)}> Counter UseEffect</button>
            <p>Count {count}</p>
            <button onClick={() => setmsg("You clicked")}>Set Message UseEffect</button>
            <p>Count {msg}</p>
        </div>
    )
}
export default Count;