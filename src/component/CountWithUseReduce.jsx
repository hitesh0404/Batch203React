import React from 'react'
import { useReducer } from 'react'

export default function CountWithUseReduce() {

    function handlecount(state,action){
        if (action.type === "increment"){
       return  state+1;
    }
    else if (action.type === "decrement") {
       return state-1;
    }
    else{
      throw  Error();
    }
}

const[count,updateCount]  = useReducer(handlecount,0);
  return (
    <>
      <div className="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          className="btn btn-primary"
          onClick={()=>updateCount({ type: "increment" })}
        >
          increase
        </button>
      </div>
      <h1>{count} {Math.random()}</h1>
      <div className="d-grid gap-2">
        <button
          type="button"
          name=""
          id=""
          className="btn btn-primary"
          onClick={()=>updateCount({ type: "decrement" })}
        >
          decrease
        </button>
      </div>
    </>
  );
}
