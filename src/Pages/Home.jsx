import React from 'react'
import './home.css'
import Topbar from '../Components/Topbar/Topbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Feed from '../Components/Feed/Feed'
import Rightbar from '../Components/RightBar/Rightbar'

function Home() {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
      
    </>
  )
}

export default Home
