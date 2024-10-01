import { useState } from "react"
export default function Button(){

    let [count, setcount]= useState(0);
     
    let inccount = ()=>{
        setcount(count + 1);
    }


    return(
        <div>
            <p>count = {count}</p>
            <button onClick={inccount}>click</button>
        </div>
    )
}