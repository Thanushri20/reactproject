import React, { useEffect, useState } from 'react'
import axiosInstance from './axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Update = () => {
     
    let {id} = useParams()
    let navigate = useNavigate() ; 
    let [fname , setfname] = useState("")
    let [fprice , setfprice] = useState("")
   


    useEffect(()=>{
            let fetchdata = async()=>{
                    let {data} = await axiosInstance.get(`/posts/${id}`)
                    setfname(data.fname)
                    setfprice(data.fprice)
                 
            }
            fetchdata()
    },[])

    let UpdateFood = (e)=>{
        e.preventDefault()
        let payload ={
            fname ,fprice
        }
        axiosInstance.put(`/posts/${id}` , payload)
        toast.info(`${fname} updated `)
        navigate("/food")

    }

  return (
    <div id="update-block">
      <form id="upd" action="" style={{textAlign:"center"}}>
        <fieldset>
        <legend>UPDATE PRODUCT</legend>
                    <br /> <br />
                    <label htmlFor="">Food Name : </label>
                    <input value={fname} type="text" onChange={(e)=>{
                            setfname(e.target.value)
                    }} /> <br /> <br />
                   
                    <label htmlFor="">Food Price : </label>
                    <input value={fprice} type="text" onChange={(e)=>{
                            setfprice(e.target.value)
                    }}   /> <br /> <br />
                    <button onClick={UpdateFood}>Update  </button>
                    <br /><br />
        </fieldset>
      </form>
    </div>
  )
}

export default Update
