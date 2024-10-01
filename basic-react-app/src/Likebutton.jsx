import { useState } from "react";
export default function Likebutton(){
    let [isLike, setisLike] = useState(false);
    let [clicks, setclicks] = useState(0);
 
    let toggle = ()=>{
        setisLike(!isLike);
        setclicks(clicks+1);
    }


   let likestyle = {color: "red"};
    return(
        <div>
        <p >click = {clicks}</p>
        <p onClick={toggle}>{
            isLike
            ?(  <i class="fa-regular fa-heart" ></i>):
            ( <i class="fa-solid fa-heart" style={likestyle}></i>)
        }
            </p>
            </div>
    )
}