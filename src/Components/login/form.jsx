import { useState } from 'react'
import './Style.css'

function Login() {
    const [formData,setForm] = useState({
        name:"",
        email:"",
        password:""

    })
    const [submitData, setSubmit] = useState({
        name:"",
        email:"",
        password:""
    })

     const handleChange = (e)=>{

      const {name,value}=e.target;
      setForm((pre)=>({
        ...pre,
        [name]:value

      }))

     }

     const ChangeClick = (event)=> {
        event.preventDefault();
        setSubmit(formData)

     }
  return (
      <>
       <div className='main-section'>
        <div className='heading'>
            <h1 >Login from</h1>
            <form onSubmit={ChangeClick} style={{paddingRight:"40%", lineHeight:"35px"}}>
                <div>
                    <label  style={{display:"block", fontSize:"18px", color:"blue"}}>name:</label>
                    <input onChange={handleChange} name="name" value = {formData.name} type="text" placeholder='enter your name' style={{width:"170%", padding:"5px", border:"1px solid black", borderRadius:"5px"}}/>
                   
                </div>
                <div >
                    <label style={{display:"block", fontSize:"18px", color:"blue"}} >Email:</label>
                    <input onChange={handleChange}  value = {formData.email}  name="email" type ="email" placeholder='enter your Email' style={{width:"170%", padding:"5px", border:"1px solid black", borderRadius:"5px"}} />
                   
                </div>
                <div >
                    <label style={{display:"block", fontSize:"18px", color:"blue"}} >password:</label>
                    <input onChange={handleChange} type="password" name="password" value={formData.password} placeholder='enter your password' style={{width:"170%", padding:"5px", border:"1px solid black", borderRadius:"5px"}} />
                   
                </div>
                <button  type = "submit" style={{margin:"auto", border:'1px solid black',width:"170%",marginTop:"10px",background:"blue",color:"white",fontSize:"20px",cursor:"pointer"}}>Login</button>

            </form>

            <div>
                <h1>user information</h1>
                <p style={{color:"black"}}>name:{submitData.name}</p>
                <p style={{color:"black"}}>Email:{submitData.email}</p>
                <p style={{color:"black"}}>Email:{submitData.password}</p>
            </div>

        </div>

       </div>


      </>
  )
}

export default Login