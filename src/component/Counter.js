import React,{ useState } from 'react';
function Counter(props) {
    
    const [getCount,setCount] = useState(0);
    let increment = (event)=>{
        setCount((getCount)=>getCount+1);   
        setCount((getCount)=>getCount+1);  
        setCount((getCount)=>getCount + 1);
    };
    let decrement = (event) => {
      setCount(getCount - 1);
    };
    return (
      <>
        <div className="d-grid gap-2">
          <button
            type="button"
            onClick={increment}
            name=""
            id=""
            className="btn btn-primary"
          >
            Increment
          </button>
          <h1 data-testid="countValue">{getCount}</h1>
          <button
            type="button"
            onClick={decrement}
            name=""
            id=""
            className="btn btn-primary"
          >
            Decrement
          </button>
        </div>
        <div>
          <h1 id="value">{getCount}</h1>
        </div>
        <div>
          <h1 id="value1">{getCount}</h1>
          <h1 id="value3">{getCount}</h1>
        </div>
      </>
    );
}

export default Counter;