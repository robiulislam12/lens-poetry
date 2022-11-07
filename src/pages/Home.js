import React from 'react'
import useTitles from '../hooks/useTitles'

const Home = () => {
    // set page title
    useTitles("Home")
  return (
    <div className='text-3xl '>Home</div>
  )
}

export default Home