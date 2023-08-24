import React from 'react'
import "./featured.scss"
import dummy_pic from "../../assets/dummy_pic.webp"
import dummy_movie_name from "../../assets/dummy_movie_name.png"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = () => {
  return (
    <div className='featured'>
      <img src={dummy_pic} alt=""/>
      <div className="info">
        <img src={dummy_movie_name} alt="" />
        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero similique asperiores esse animi provident odio sint temporibus impedit deserunt, vel veniam id laboriosam voluptatem, aut sapiente ad, aperiam hic.</span>
        <div className="buttons">
            <button className='play'>
                <PlayArrowIcon />
                <span>Play</span>
            </button>
            <button className='more'>
                <InfoOutlinedIcon />
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
