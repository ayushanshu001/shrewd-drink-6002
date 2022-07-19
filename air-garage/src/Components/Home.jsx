import React from 'react'

const Home = () => {
  return (
    <>
    <div>
        <img style={{height:"17rem", width:"17rem"}} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png"/>
        
    </div>
    <div>
        <h1>Parking Operations for the 21st Century</h1>
    </div>
    <div>
        <h3 style={{fontWeight:"normal"}}>AirGarage modernizes parking assets with one streamlined service covering enforcement, payment collection,</h3>
        <h3 style={{fontWeight:"normal"}}>maintenance and more.</h3>
        <button style={{height:"3rem", width:"9rem", color:"#FA824C", backgroundColor:"#FFEECC"}}>TALK TO SALES</button>
    </div>
    <div style={{display:"flex", paddingLeft:"20rem", marginTop:"7rem",gap:"5rem"}}>
        <img  style={{height:"18rem", width:"28rem",paddingTop:"2rem",borderBottomLeftRadius:"0.5rem",borderBottomRightRadius:"0.5rem"}} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60a6d928e7187f18da1ab8c1_color-garage-p-500.png"/>
        <div style={{flexDirection:"column",textAlign:"left"}}>
            <h1>Partner with AirGarage</h1>
            <h4 style={{fontWeight:"lighter"}}>AirGarage is a full service parking operator.
                 We handle all of the<br/> day-to-day logistics that go into making your parking lot or<br/>
                  garage the most successful version of itself.<br/><br/>

We operate hundreds of parking lots and garages across the 
<br/>United States and Canada on behalf of landlords, property<br/>
 managers, and other real estate operators. Our focus is using <br/>
 technology to lower operational overhead and increase your net<br/> parking income.</h4>
 <h4 style={{fontSize:"small"}}>We're already maximizing returns for top-tier real estate owners.</h4>
 <div style={{display:"flex",gap:"3rem"}}>
    <img style={{height:"2rem",width:"4.5rem"}} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff4db28ba55b4f84383d98f_1200px-Starwood_Hotels_and_Resorts_logo.svg-p-500.png"/>
    <img style={{height:"2rem",width:"4.5rem"}} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot-p-500.png"/>
    <img style={{height:"2rem",width:"4.5rem"}} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton-p-500.png"/>
 </div>
            </div>  
        
    </div>
    <div style={{textAlign:"left",paddingLeft:"18rem"}}>
        <h1  style={{paddingRight:"30rem", paddingTop:"6rem"}}>Increase Your Net Revenue</h1>
        <h4 style={{fontWeight:"lighter"}}>Our proprietary technology enables us to offer
             lower operating costs to our partners meaning 
             they take home up to 50% more every <br/>month than when they worked with our competition.</h4>
    </div>
    </>
  )
}

export default Home