
import React from 'react'
import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends,faSave,faVideo,faFeed} from '@fortawesome/free-solid-svg-icons'
import {faPagelines,fa42Group} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">

        <div className="profile">
          <img src="/Assets/Image/1699029158598.jpg" alt="" />
          <p><b>Ayon Banerjee</b> </p>
        </div>
        
        <div className="menu">
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={faUserFriends} />
          <p>Friends</p>
          </div>
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={faPagelines} />
          <p className='page'>Pages</p>
          </div>
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={fa42Group} />
          <p className='group'>Groups</p>
          </div>
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={ faSave} />
          <p className='save'>Saved</p>
          </div>
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={faVideo} />
          <p>Videos</p>
          </div>
        <div className="menu-item">
          <FontAwesomeIcon className='icon' icon={faFeed} />
          <p className='feed'>Feed</p>
          </div>
        
        
       </div>
       <button className='btn'>See more</button>

       <hr className='hr'/>

       <div className="liked-pages">
        <div className="page-wrapper">
          <div className="page-list">
            <ol>
              <li>Evergreen Bangladesh</li>
              <li>Amader Khulna</li>
              <li>Musical Life</li>
              <li>Artcell</li>
              <li>Shironamhin</li>
              <li>Lalon Band</li>
              <li>Pakhi</li>
             
            </ol>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Sidebar
