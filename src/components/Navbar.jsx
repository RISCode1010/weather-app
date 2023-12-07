import React from 'react'
import { ReactComponent as LogoSvg } from '../assets/Mylogo.svg';
import { ReactComponent as RefreshLogo } from '../assets/RefreshLogo.svg';
import "../style/navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
        <div className="brand_section">
            <LogoSvg className="logo"/>
            <div className="brand_name">Weather 99</div>
        </div>
        <div className="refresh_section">
            <RefreshLogo className="refresh_logo"/>
            {/* <p>Refresh</p> */}
            <div className="refresh">Refresh</div>
        </div>
    </div>
  )
}

export default Navbar