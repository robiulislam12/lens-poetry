import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import SnapShot from '../components/SnapShot'
import useTitles from '../hooks/useTitles'

const Home = () => {
    // set page title
    useTitles("Home")
  return (
    <>
      <HeroSection/>
      <Services/>
      <SnapShot/>
    </>
  )
}

export default Home