import React from 'react'
import { useNavigate } from 'react-router-dom'
  

function Error() {
    const navi = useNavigate();

     const handle = ()=> {
        navi("/sign-up")

     }

    
  return (
        <>
         <h1>the error page</h1>
          <div style={{display:"flex", height:"100vh",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"white"}}>
             <button onClick={handle} style={{cursor:"pointer"}}>go to navigate</button>
          </div>
        </>
  )
}

export default Error