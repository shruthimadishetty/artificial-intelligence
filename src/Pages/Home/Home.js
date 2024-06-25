import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Ai from '../../Components/Ai/Ai'
import About from '../../Components/About/About'
import History from '../../Components/History/History'
import Services from '../../Components/Services/Services'
import Footer from '../../Components/Footer/Footer'
import Faq from '../../Components/Faq/Faq'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ai/>
      <About/>
      <History/>
      <Services/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home
