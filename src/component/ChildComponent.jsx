import React from "react";

export default React.memo(({ name }) => {
    console.log(Math.random());
    console.log(name);
    return  name;
});

// export default function ChildComponent({name}) {
//   return (<div>
//     {name}
//     {console.log(Math.random())} 
//      {console.log(name)}
// </div>)
// }