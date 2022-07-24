import React from 'react'
import Cfooteer from './Cfooteer'

const Parking = () => {
  return (
    <div>
        <div>
            <h2>Find Parking</h2>
            <h4 style={{color:"grey"}}>100s of spot available near you</h4>
        </div>
        <div style={{display:"flex",paddingLeft:"19rem",gap:"3rem",textAlign:"left"}}>
        <div>
            <h2>LOCATION</h2>
            <input placeholder='Enter an address' style={{width:"28rem",height:"2rem",background:"#F7F7F7",border:"none",outline:"none"}}/>
        </div>
        <div>
            <h2>TYPE</h2>
            <div style={{display:"flex",gap:"2.5rem"}}>
            <select style={{width:"10rem",height:"1.8rem"}}>
            <option>Hourly</option>
            <option>Monthly</option>
            <option>Airport</option>
            </select>
            
            
            <button style={{width:"10rem",height:"2rem",background:"#FFEECC",color:"#DD703F",border:"none",outline:"none"}}>SEARCH</button>
            </div>
        </div>
        </div>
        <div style={{paddingTop:"3rem"}}>
            <div>
                <h3>Popular seraches</h3>
            </div>
            <div style={{display:"flex",gap:"2rem",paddingLeft:"14rem"}}>
                <img style={{height:"19rem",width:"15rem"}} src="https://parking.airgarage.com/static/media/hollywood.3cda80f5.png"/>
                <img style={{height:"19rem",width:"15rem"}} src="https://parking.airgarage.com/static/media/omaha.47180892.png"/>
                <img style={{height:"19rem",width:"15rem"}} src="https://parking.airgarage.com/static/media/a2.29e68f98.png"/>
                <img style={{height:"19rem",width:"15rem"}} src="https://parking.airgarage.com/static/media/cacti.0300cb19.png"/>

            </div>
        </div>
        <div>
            <Cfooteer/>
        </div>
    </div>
  )
}

export default Parking