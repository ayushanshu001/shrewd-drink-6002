import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Footer from './Footer'

const Signup = () => {
    const [name,setname]=useState("")
    const [last,setLast]=useState("")
    const [email,setEmail]=useState("")
    const [password,setpassword]=useState("")
    const [flag,setFlag]=useState(false)
    const [login,setLogin]=useState(false)

    
    let navigate=useNavigate()
    

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!name || !last || !email || !password){
            setFlag(true)
            alert("Please Fill Every Field")
        }
        else{
            setFlag(false)
            localStorage.setItem("Email",JSON.stringify(email))
            localStorage.setItem("Password",JSON.stringify(password))
            console.log("Saved in Local Storage")
            setLogin(!login)
            navigate("/login")
            
        }

    }
  return (
    <div >
        <div style={{display:"flex"}}>
            <div style={{height:"42rem",width:"40%",backgroundColor:"#FFEECC"}}>
                <img style={{height:"19rem", width:"30rem",paddingTop:"10rem"}} src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png"/>
            </div>
            <div>
                <h2 style={{paddingTop:"5rem",paddingLeft:"19rem",fontOpticalSizing:"initial"}}>Sign up for AirGarage</h2>
                <div style={{textAlign:"left",paddingLeft:"20rem",flexDirection:"column"}}>
                <form onSubmit={handleSubmit}>
                <label>First name</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={name} onChange={(e)=>setname(e.target.value)} type="text" />
                <br/>
                
                <label>Last name</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={last} onChange={(e)=>setLast(e.target.value)} type="text" />
                <br/>
                
                <label>Email</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <br/>
                
                <label>Password</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={password} onChange={(e)=>setpassword(e.target.value)} type="password" />
                <br/>
                <br/>
                <br/>
                
                <input style={{height:"3rem",width:"23rem",border:"none",backgroundColor:"#FFEECC",color:"#DD703F"}} type="submit"/>

                
                </form>
                </div>
            </div>
           
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Signup