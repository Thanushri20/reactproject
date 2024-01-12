import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from './axiosInstance';
import { toast } from 'react-toastify';

const Food = () => {
 let [products,setproducts]=useState([])

useEffect(() => {
  let fetchdata=async ()=>{
    let {data}=await axiosInstance.get("/posts")
    setproducts(data)
  }
  fetchdata()
 }, [])

 let handleDelete=(id)=>{
  axiosInstance.delete(`/posts/${id}`)
  toast.error(`food deleted`)
  window.location.assign("/food")
 }

  return (
    <div className='container'>
      {products.map((x)=>{
        return(
          <div className='food'>
            <img src={"https://api.dicebear.com/7.x/fun-emoji/svg"} alt="" />
            <h3>Product Name : {x.fname}</h3>
           
            <h3>Product Price : {x.fprice}</h3>
            <div className='btn'>
            <button>
                        <Link id='links' to={`/update/${x.id}`}>Update</Link>
                      </button>
                      <button onClick={()=>{
                          handleDelete(x.id)
                      }}>Delete</button>
            </div>
          </div>
        )
      })}
      
    </div>
  )
}

export default Food
