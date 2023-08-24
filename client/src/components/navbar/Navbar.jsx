import React, { useState } from 'react'
import "./navbar.scss"
import netflix_img from "../../assets/netflix_img.jpg"
import dummy_profile_pic from "../../assets/dummy-profile-pic.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  }

 
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <img src={netflix_img} alt="" />
          <span>Home</span>
          <span>Shows</span>
          <span>Movies</span>
          <span>Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <SearchIcon className='icons'/>
          <span>KID</span>
          <NotificationsIcon className='icons'/>
          <img src={dummy_profile_pic} alt="dummy_profile" />
          <div className="profile">
            <ArrowDropDownIcon className='icons'/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
