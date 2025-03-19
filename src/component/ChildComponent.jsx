import React from 'react'
const greet = ({name})=>{
    setTimeout(()=>{
        console.log(Math.random());
        console.log(name);
    },2)
    return "hello "+name;
}

export default React.memo(greet)