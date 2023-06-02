import Upload from "../Upload/Upload"
import React from 'react'
import Card from '../Card/Card'
import Navbar from "../Navbar/Navbar"
import './Home.css'



const Home = () => {

  return (
    <div id='home'>
      <Navbar/>
      <Upload/>
      <div id='fileUp'>
        <Card/>
      </div>
    </div>
  )
}

export default Home