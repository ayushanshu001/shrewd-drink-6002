import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Parking from '../Components/Parking'
import Signup from '../Components/Signup'
import Talk from '../Components/Talk'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/parking" element={<Parking/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/talk" element={<Talk/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes