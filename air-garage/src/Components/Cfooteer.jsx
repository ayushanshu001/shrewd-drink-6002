import React from 'react'
import { Link } from 'react-router-dom'

const Cfooteer = () => {
  return (
    <div>
        <div style={{width:"100%",height:"5rem",background:"#DD703F",color:"white"}}>
            <h4 style={{paddingTop:"0.5rem"}}>2021 AirGarage,Inc</h4>
            <div style={{display:"flex",gap:"1rem",paddingLeft:"40rem"}}>
                <Link style={{color:"white",textDecoration:"none"}} to="/">Homepage</Link>
                <Link style={{color:"white",textDecoration:"none"}} to="#">Terms</Link>
                <Link style={{color:"white",textDecoration:"none"}} to="#">Contact us</Link>


            </div>

        </div>
    </div>
  )
}

export default Cfooteer