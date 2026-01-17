// import React, { useEffect, useState } from 'react'

// function DataFeching() {
//   const [data,setData]=useState([]);
//   const [error,setError]=useState();

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=> response.json())
//     .then((aata)=> setData(aata))
//     .catch((error)=>setError(error))
//   },[])

//   if(error) {
//     console.log("this is wrong")
//   }

//   return (
//       <>
//           <h1>api list </h1>
//      <ul>
//               {data.map((pst)=> (
               
//                   <h1>
//                     {pst.title}
//                   </h1>

//         ))}

//             </ul>
//       </>
//   )
// }

// export default DataFeching;

import React from 'react'

function DataFeching() {
  return (
    <h1>
      hello world
    </h1>
       
  
  )
}

export default DataFeching