import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    let navigate=useNavigate()
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")

    let handleSignup=(e)=>{
        e.preventDefault();
        window.localStorage.setItem("username",username)
       window.localStorage.setItem("password",password)
       navigate("/login")
    }
     
  return (
    <div id="sign">
        <form action="">
        <fieldset style={{textAlign:"center"}}>
            <legend>Signup Page</legend>
            <label htmlFor="">Username :</label> 
            <input type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br/><br/>
            <label htmlFor="">Password :</label> 
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br/><br/>
            <button onClick={handleSignup}>signup </button>
        </fieldset>
       </form>
    </div>
  )
}

export default Signup
