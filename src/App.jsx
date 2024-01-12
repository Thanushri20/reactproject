import React from 'react'
import Nav from './Nav'
import Order from './Order'
import Login from './Login'
import Signup from './Signup'
import Food from './Food'
import Update from './Update'
import "./global.css"

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = () => {
  return (
    <Router>
      <ToastContainer/>
        <Nav/>
        <Routes>
            <Route path="/order" element={<Order/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/update/:id' element={<Update/>}/>
           
        </Routes>
    </Router>
  )
}

export default App
