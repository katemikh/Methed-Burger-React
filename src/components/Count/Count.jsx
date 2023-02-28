import { useState } from "react";
import style from "./Count.module.css";

export const Count = (props) => { 
    
    const [count, setCount] = useState(props.count)
    //console.log ("state: ", state);

    const addCount = () => {
        setCount(count+1) ;
    }

    const removeCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
        
    }
    
    return (
<div className={style.count}>
  <button className={style.minus} onClick={removeCount} disabled={count ===1}>-</button>
  <p className={style.amount}>{count}</p>
  <button className={style.plus} onClick={addCount}>+</button>
</div>
);
};