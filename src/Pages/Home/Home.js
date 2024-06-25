import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Ai from '../../Components/Ai/Ai'
import About from '../../Components/About/About'
import History from '../../Components/History/History'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ai/>
      <About/>
      <History/>
    </div>
  )
}

export default Home
