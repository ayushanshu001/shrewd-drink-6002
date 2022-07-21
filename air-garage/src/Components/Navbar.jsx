import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div style={{paddingLeft:"20rem"}}>
            <Link to="/"><img style={{height:"2rem", width:"9rem",paddingTop:"1rem"}}src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"/></Link>
        </div>
     
     <div style={{display:"flex", gap:"2rem", paddingRight:"15rem", textDecoration:"none"}}>
     <Link style={{textDecoration:"none",color:"black"}} to="/parking"><h5>Find parking</h5></Link>
     <Link style={{textDecoration:"none",color:"black"}} to="/login"><h5>Log in</h5></Link>
     <Link style={{textDecoration:"none",color:"black"}} to="/signup"><h5>Signup</h5></Link>
     <Link style={{textDecoration:"none",color:"black"}} to="/talk"><h5>Talk to Sales</h5></Link>
     </div>
    </div>
  )
}

export default Navbar