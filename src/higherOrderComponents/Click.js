import React from "react";
import withCounter from '../HOC/withCounter';

const Click = (props)=>{
    
    const {count, increment} = props;

    return (
        <div>
        <button type = "button" onClick={increment}>Clicked { count } times</button>
        </div>
    )
}
export default withCounter(Click)