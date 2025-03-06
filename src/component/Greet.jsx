import React,{useEffect,useState} from 'react';
function Greet(props) {
    const [textBox,setTextBox] = useState('Enter Name');
    const [count, setCount] = useState(0);

    let logMsg = ()=>{
        console.log("hello", textBox);
         console.log(count);
    }

    let handlerFunction=(event)=>{
        setTextBox(event.target.value)
        // logMsg();
    }

    let increment = () =>{
        setCount(count+1)
        setTimeout(()=>{setCount(count+10)},1000*3)
        // logMsg();
    }

    useEffect(logMsg,[textBox,count])
   
    return (
        <>
            <div class="mb-3">
                <label for="" class="form-label">Hello {textBox}</label>

                <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    value={textBox}
                    placeholder="enter name"
                    aria-describedby="helpId"
                    onChange={handlerFunction}
                />
                
                <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            <div class="d-grid gap-2">
                <button
                    type="button"
                    name=""
                    id=""
                    onClick={increment}
                    class="btn btn-primary"
                >
                   {count} 
                </button>
            </div>
            

            
        </>
    );
}

export default Greet;