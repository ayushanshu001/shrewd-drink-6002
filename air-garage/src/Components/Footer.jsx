import React from 'react'

const Footer = () => {
  return (
    <div>
        <div style={{backgroundColor:"#FFEECC",height:"25rem",width:"100%"}}>
            <div></div>
            <div style={{display:"flex",gap:"10rem",paddingLeft:"20rem",textAlign:"left",color:"#DD703F",paddingTop:"5rem"}}>
                <div style={{flexDirection:"column"}}>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Company</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>About</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Careers</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>FAQ</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Contact us</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Privacy Policy</h4>
                </div>
                <div style={{flexDirection:"column"}}>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Uses</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Hotels</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Garages</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Surafce Lots</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Airports</h4>
                </div>
                <div style={{flexDirection:"column"}}>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Features</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Access control</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Parking management</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Payment collection</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Gate arm alternative</h4>
                </div>
                <div style={{flexDirection:"column"}}>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>Find parking</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>on iOS app</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>on Android app</h4>
                    <h4 style={{fontSize:"small",fontWeight:"lighter"}}>on web</h4>
                </div>

            </div>
            <hr/>
            <h3 style={{paddingRight:"45rem",color:"grey",fontSize:"medium"}}>© 2022 AirGarage Inc</h3>
        </div>
    </div>
  )
}

export default Footer