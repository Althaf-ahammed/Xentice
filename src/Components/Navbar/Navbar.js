import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='headerParentDiv'>
        <div className="headerChildDiv">
            <div className="brandname">
             <div className='menuIcon'>
             <ion-icon name="reorder-three-outline" className='menulogo'></ion-icon>

             </div>
             <div className="logo">
                <img alt='logo' src='https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png' className='logoImage'></img>
             </div>
            </div>
            <div className='headerRight'>
                <div className="post">
                <ion-icon name="megaphone-outline"></ion-icon>
                <p>Post Ad</p>
                </div>
                <div className="nearMe">
                <ion-icon name="location-outline"></ion-icon>
                <p>Near Me</p>
                </div>
                <div className='login'>
                <ion-icon name="log-in-outline"></ion-icon>
                <p>Login/Sign Up</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar