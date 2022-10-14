import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerParentDiv'>
        <div className="content">
            <div className="copyright">
                <p>
                © Xentice Group of Companies 2022 . All Rights Reserved
                </p>
            </div>
            <div className="about">
                <a href='#'>About Us</a>
                <a href='#'>Contact Us</a>
                <a href='#'>Privacy Policy</a>
            </div>
        </div>

    </div>
  )
}

export default Footer