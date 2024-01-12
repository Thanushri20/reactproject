import React, { useState } from 'react'
import axiosInstance from './axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Order = () => {

    let [fname,setfname]=useState("")
    let [fprice,setfprice]=useState("")
   
    let navigate=useNavigate()

    let addfood=(e)=>{
        e.preventDefault()
  
        let payload={ 
            fname,fprice
        }
        axiosInstance.post("/posts",payload)
   toast.success("Food orderd Successfully")
        navigate("/food")
    }
  return (
    <div id="pro">
      <form id="ord" action="" style={{textAlign:"center"}}>
        <fieldset>
            <legend>ORDER FOOD</legend><br /><br />
            <label htmlFor="">Food Name :</label>
            <input type="text" onChange={(e)=>{
                setfname(e.target.value)
            }}/><br /><br />
            
            <label htmlFor="">Food Price :</label>
            <input type="text"  onChange={(e)=>{
                setfprice(e.target.value)
            }}/><br /><br />
            <button onClick={addfood}>ORDER FOOD</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Order
