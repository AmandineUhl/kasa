import React from 'react'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import backgroundImage from "../assets/bannerflat.jpg";



function About() {
  return (
    <div>
     <Banner backgroundImage={backgroundImage}/>
     <Collapse/>
     <Collapse/>
     <Collapse/>
     <Collapse/>
    </div>
  )
}

export default About
