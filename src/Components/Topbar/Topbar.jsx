import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






import './topbar.css'
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons'
function Topbar() {
  return (
    <div className='topbar'>
      <div className="topBarWrapper">
        <div className="leftSide">
            <h4 className='logo'>Chatbook</h4>
        </div>
        <div className="center">
            <input type="text" />
        <button className='btn'>Search</button>
            
        </div>
        <div className="rightSide">
            <div className="rightLink">
                <p>Homepage</p>
                <p>Messages</p>
            </div>
            <div className="profile">
                <img className='image' src="/Assets/Image/1699029158598.jpg" alt="" />
                <FontAwesomeIcon className='icon' icon={faBell} />
                <FontAwesomeIcon className='icon' icon={faGear} />
                <p>1</p>
            </div>
           
        </div>
        
      </div>
      
    </div>
  )
}

export default Topbar