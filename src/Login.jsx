import React, { useState } from 'react'
import {Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {

    let navigate=useNavigate()
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")

    let handleSignup=(e)=>{
        e.preventDefault();
        let dbuser =window.localStorage.getItem("username")
        let dbpass =window.localStorage.getItem("password")

        if(dbuser == username && dbpass == password){
            navigate("/order")
            toast.success(`${username}Logged in success`)
        }
        else{
            toast.error("Invalid credentials")
        }
    }
    

  return (
    <div id="log">
       <form action="">
        <fieldset style={{textAlign:"center"}}>
            <legend>Login Page</legend>
            <label htmlFor="">Username :</label> 
            <input type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br/><br/>
            <label htmlFor="">Password :</label> 
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br/><br/>
            <button onClick={handleSignup}>Login </button>
        </fieldset>
       </form>
    </div>
  )
}

export default Login

