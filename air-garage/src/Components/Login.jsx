import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)

    let navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()

        let Emailog=JSON.parse(localStorage.getItem("Email"))
        let Pass=JSON.parse(localStorage.getItem("Password"))

        if(!email || !password){
            alert("Fill All Fields")
        }
        else if(Pass==password && Emailog==email){
            alert("Login Successfull")
            navigate("/")
        }
        else{
            alert("Invalid Email or Password")
        }
        


    }


return(
    <div>
        <div style={{display:"flex"}}>
            <div style={{height:"42rem",width:"40%",backgroundColor:"#FFEECC"}}>
                <img style={{height:"19rem", width:"30rem",paddingTop:"10rem"}} src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png"/>
            </div>
            <div>
                <h2 style={{paddingTop:"5rem",paddingLeft:"19rem",fontOpticalSizing:"initial"}}>Log in to AirGarage<br/>Or <Link style={{textDecoration:"none"}} to="/signup"><h4 style={{fontSize:"medium"}}>Signup</h4></Link> </h2>
                <div style={{textAlign:"left",paddingLeft:"20rem",flexDirection:"column"}}>
                <form onSubmit={handleLogin}>
                
                
                <label>Email</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                <br/>
                
                <label>Password</label>
                <br/>
                <br/>
                <input style={{height:"2.5rem",width:"23rem",border:"none",backgroundColor:"#F2F2F2"}} value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                <br/>
                <br/>
                <br/>
                
                <input style={{height:"3rem",width:"23rem",border:"none",backgroundColor:"#FFEECC",color:"#DD703F"}} type="submit"/>

                
                </form>
                </div>
            </div>
           
        </div>
    </div>
)
}

export default Login